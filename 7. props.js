import React from "react";
import ReactDOM from "react-dom";

//components can accept arguments, similar to JavaScript functions.
//These arguments are called props.
//you can pass props where you are calling the component
//same as js function
//and you can access the props where you define that component just as below
//you can name your property anything you want in my case i named it as props
//access the props by dot .

function Hello() {
  return (
    <div>
      <Name name="Muneer" job="Student" />
      <Name name="David" job="Developer" />
    </div>
  );
}

const Name = (props) => {
  return (
    <div>
      <h1>Introduction</h1>
      <h3>My name is {props.name}</h3>
      <h5>I am a {props.job}</h5>
    </div>
  );
};
ReactDOM.render(<Hello />, document.getElementById("root"));
