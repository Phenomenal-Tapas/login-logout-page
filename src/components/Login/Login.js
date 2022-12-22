import React, { useState, useEffect } from "react";
import Card from "../common/Card/Card";
import classes from "../styles/Login.module.css";
import Button from "../common/Button/Button";
import { EMAIL, LOGIN_TEXT, PASSWORD } from "../constants/constants";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 8
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">{EMAIL}</label>
          <input
            type="email"
            id="email"
            minLength="8"
            maxLength="40"
            placeholder="Enter Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">{PASSWORD}</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            minLength="8"
            maxLength="24"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            {LOGIN_TEXT}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
