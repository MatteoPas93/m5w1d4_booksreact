import React from "react";
import classes from "./StylePages/ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={classes["container-error"]}>
      <h3>Oops... Page not Found</h3>
      <button className={classes["button-home"]}>
        <a href="/"> Go Home!</a>
      </button>
      <img
        className="w-80 h-80"
        src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?size=626&ext=jpg&ga=GA1.2.1379207800.1700593887&semt=ais"
        alt="error"
      />
    </div>
  );
};

export default ErrorPage;
