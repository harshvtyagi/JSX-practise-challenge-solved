import React from "react";
import ReactDOM from "react-dom";

const name = "Harsh";
const year = new Date();
const cyear = year.getFullYear();
ReactDOM.render(
  <div>
    Created by {name}
    <p>Copyright {cyear}</p>
    <p></p>
  </div>,
  document.getElementById("root")
); //Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
