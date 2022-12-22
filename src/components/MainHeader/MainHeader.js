import React from "react";
import Navigation from "./Navigation";
import classes from "../styles/MainHeader.module.css";
import { HEADER_TEXT } from "../constants/constants";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>{HEADER_TEXT}</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
