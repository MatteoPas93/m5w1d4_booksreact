import React, { useEffect, useState } from "react";
import NavLogo from "../Navbar/Logo/Logo";
import classes from "./Welcome.module.css";

const AppWelcome = () => {
  const [showDiv, setShowDiv] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showDiv && (
        <div className={classes["container-title"]}>
          <h4>
            Welcome to the most famous books ecommerce <NavLogo />
          </h4>
          <p>This message will disappear in 5 seconds!!</p>
        </div>
      )}
    </div>
  );
};

export default AppWelcome;
