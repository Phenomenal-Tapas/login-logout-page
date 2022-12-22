import React from "react";
import { ADMIN, LOGOUT_TEXT, USERS } from "../constants/constants";
import classes from "../styles/Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">{USERS}</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">{ADMIN}</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>{LOGOUT_TEXT}</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
