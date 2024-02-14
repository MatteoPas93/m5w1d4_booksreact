import React, { useEffect, useState } from "react";
import NavLogo from "../Navbar/Logo/Logo";
import classes from "./Welcome.module.css";

const AppWelcome = () => {
  const [counter, setCounter] = useState(5);
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
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
    }
  }, [counter]);

  return (
    <div>
      {showDiv && (
        <div className={classes["container-title"]}>
          <p> Most popular fantasy book ecommerce </p>
          <NavLogo />

          <p> This message will disappear in {counter} seconds!! </p>
        </div>
      )}
    </div>
  );
};

export default AppWelcome;
