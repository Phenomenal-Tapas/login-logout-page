import React from "react";
import Card from "../common/Card/Card";
import { WELCOME_TEXT } from "../constants/constants";
import classes from "../styles/Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>{WELCOME_TEXT}</h1>
    </Card>
  );
};

export default Home;
