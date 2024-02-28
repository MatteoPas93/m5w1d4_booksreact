import React from "react";
import classes from "./StylePages/ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={classes["container-error"]}>
      <button className={classes["button-home"]}>
        <a href="/"> Go Home!</a>
      </button>
      <img
        className="w-100 h-100"
        src="https://img.freepik.com/premium-vector/page-found_23-2147508322.jpg?w=740"
        alt=""
      />
    </div>
  );
};

export default ErrorPage;
