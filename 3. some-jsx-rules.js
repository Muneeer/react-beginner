import React from "react";
import ReactDom from "react-dom";

//More on JSX
//cant return more than one element
//always return sigle element
//if more than one element always wrap into single element and return
//use camelCase for html attributes
//for example className instead of class
//similarly onClick instead of onclick ..
//always close element e.g <img/> -> fine <img>-> error

function Greeting() {
  return (
    <div>
      <h3>Hello Universe</h3>
      <ul>
        <li>Hello Earth</li>
        <li>Hello Mars</li>
      </ul>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
