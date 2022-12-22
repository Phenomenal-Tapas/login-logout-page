import React, { useState, useEffect, useReducer, useContext } from "react";
import Card from "../common/Card/Card";
import classes from "../styles/Login.module.css";
import Button from "../common/Button/Button";
import { EMAIL, LOGIN_TEXT, PASSWORD } from "../constants/constants";
import UserContext from "../context/UserContext";

const initialState = { value: "", isValid: undefined };
const emailReducer = (state, action) => {
  if (action.type === "USER_EMAIL") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "VALIDATE_EMAIL") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return initialState;
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_PASSWORD") {
    return { value: action.val, isValid: action.val.trim().length >= 8 };
  }
  if (action.type === "VALIDATE_PASSWORD") {
    return { value: state.value, isValid: state.value.trim().length >= 8 };
  }
  return initialState;
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatch] = useReducer(emailReducer, initialState);
  const [passwordState, passwordDispatch] = useReducer(
    passwordReducer,
    initialState
  );

  const authContext = useContext(UserContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    emailDispatch({ type: "USER_EMAIL", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({ type: "USER_PASSWORD", val: event.target.value });
  };

  const validateEmailHandler = () => {
    emailDispatch({ type: "VALIDATE_EMAIL" });
  };

  const validatePasswordHandler = () => {
    passwordDispatch({ type: "VALIDATE_PASSWORD" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authContext.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">{EMAIL}</label>
          <input
            type="email"
            id="email"
            minLength="8"
            maxLength="40"
            placeholder="Enter Email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">{PASSWORD}</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            minLength="8"
            maxLength="24"
            value={passwordState.value}
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
