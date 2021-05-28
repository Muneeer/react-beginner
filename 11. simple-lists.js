import React from "react";
import ReactDOM from "react-dom";
//Simple List

const people = ["Muneer", "Divid"];
//how to access the simple array of strings in react?
//by using array.map
//check the example below

function Hello() {
  return <div>{person}</div>;
}

//note that name must be 'children' else it wont work
const person = people.map((name) => {
  return (
    <>
      <h1>Introduction</h1>
      <h3>{name}</h3>
    </>
  );
});
//but how to access the arrays of objects??

ReactDOM.render(<Hello />, document.getElementById("root"));
