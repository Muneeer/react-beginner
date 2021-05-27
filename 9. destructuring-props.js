import React from "react";
import ReactDOM from "react-dom";
//Destructing Props
//You can use object destructuring from ES6
//Because when you pass props its an object
//and to access values of an object you always have to use dot(.)
//you can destructure props as follow

// function Hello() {
//   return (
//     <div>
//       <Name name="Muneer" job="Student" />
//       <Name name="David" job="Developer" />
//     </div>
//   );
// }

// const Name = (props) => {
//   return (
//     <div>
//       <h1>Introduction</h1>
//       <h3>My name is {props.name}</h3>
//       <h5>I am a {props.job}</h5>
//     </div>
//   );
// };

//Destructuring above code would be
function Hello() {
  return (
    <div>
      <Name name="Muneer" job="Student" />
      <Name name="David" job="Developer" />
    </div>
  );
}
// const Name = ({ name, job }) => {
//OR
const Name = (props) => {
  const { name, job } = props;
  return (
    <div>
      <h1>Introduction</h1>
      <h3>My name is {name}</h3>
      <h5>I am a {job}</h5>
      {/* now you can access directly by the names without dot(.) */}
    </div>
  );
};

ReactDOM.render(<Hello />, document.getElementById("root"));
