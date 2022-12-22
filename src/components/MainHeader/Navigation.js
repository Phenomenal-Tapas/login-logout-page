import React, { useContext } from "react";
import { ADMIN, LOGOUT_TEXT, USERS } from "../constants/constants";
import UserContext from "../context/UserContext";
import classes from "../styles/Navigation.module.css";

const Navigation = (props) => {
  const user = useContext(UserContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {user.isLoggedIn && (
          <li>
            <a href="/">{USERS}</a>
          </li>
        )}
        {user.isLoggedIn && (
          <li>
            <a href="/">{ADMIN}</a>
          </li>
        )}
        {user.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>{LOGOUT_TEXT}</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
