import React from "react";
import ReactDOM from "react-dom";
//Props Children
//you can use prop children in between the opening and closing tag
//to display whatever you want
//when invoking a component and access with props.children if the
//object is not destructured else you can just access it as simply children
function Hello() {
  return (
    <div>
      <Name name="Muneer" job="Student">
        <p>This is a prop children !</p>
      </Name>
      <Name name="David" job="Developer" />
    </div>
  );
}

//note that name must be 'children' else it wont work
const Name = ({ name, job, children }) => {
  return (
    <div>
      <h1>Introduction</h1>
      <h3>My name is {name}</h3>
      <h5>I am a {job}</h5>
      {children}
    </div>
  );
};

ReactDOM.render(<Hello />, document.getElementById("root"));
