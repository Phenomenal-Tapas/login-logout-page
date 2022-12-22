import React, { useContext } from "react";
import Button from "../common/Button/Button";
import Card from "../common/Card/Card";
import { LOGOUT_TEXT, WELCOME_TEXT } from "../constants/constants";
import UserContext from "../context/UserContext";
import classes from "../styles/Home.module.css";

const Home = (props) => {
  const authContext = useContext(UserContext);
  return (
    <Card className={classes.home}>
      <h1>{WELCOME_TEXT}</h1>
      <Button onClick={authContext.onLogout}>{LOGOUT_TEXT}</Button>
    </Card>
  );
};

export default Home;
