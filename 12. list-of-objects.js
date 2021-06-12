import React from "react";
import ReactDOM from "react-dom";
//List of Objects
const PersonList = [
  {
    name: "Muneer",
    job: "Student",
  },
  {
    name: "John",
    job: "Developer",
  },
];
//map will return a new array
function Hello() {
  return (
    <div>
      {PersonList.map((person) => {
        return <Person person={person}></Person>; //return a Person with each information of an object
      })}
    </div>
  );
}

const Person = (props) => {
  //props is not gonna be just an object its gonna be an object of person objects
  //check the difference by console.log(props) and console.log(props.person)
  // console.log(props);
  // console.log(props.person);
  const { name, job } = props.person; //destructuring
  return (
    <div>
      <h1>Introduction</h1>
      <h4>My name is {name}</h4>
      <h5>I am a {job}</h5>
    </div>
  );
};

ReactDOM.render(<Hello />, document.getElementById("root"));
