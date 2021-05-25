import React from "react";
import ReactDom from "react-dom";

//stateless functional component
//always return JSX

// function Greeting() {
//   return <h4>Hello World</h4>; //JSX Syntax
// }

//we can create component using React like below

const Greeting = () => {
  return React.createElement("h1", {}, "Hello World");
};
//creating components using React.create is length so we JSX
ReactDom.render(<Greeting />, document.getElementById("root"));
