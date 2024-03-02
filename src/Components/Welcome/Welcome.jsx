import React, { useEffect, useState } from "react";
import NavLogo from "../Navbar/Logo/Logo";
import classes from "./Welcome.module.css";

const AppWelcome = () => {
  const [counter, setCounter] = useState(5);
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    const showDivStored = sessionStorage.getItem("showDiv");
    if (showDivStored === "false") {
      setShowDiv(false);
    }
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (counter === 0) {
      setShowDiv(false);
      sessionStorage.setItem("showDiv", "false")
    }
  }, [counter]);

  return (
    <div>
      {showDiv && (
        <div className={classes["container-title"]}>
          <p data-testid="messagePage"> Most popular fantasy book ecommerce </p>
          <NavLogo />

          <p data-testid="counterPage"> This message will disappear in {counter} seconds!! </p>
        </div>
      )}
    </div>
  );
};

export default AppWelcome;
