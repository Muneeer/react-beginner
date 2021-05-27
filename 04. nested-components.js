import React from "react";
import ReactDom from "react-dom";

//Nested Components
//First create components
//Add components into root Component i.e Greeting()

// function Greeting() {
//   return (
//     <div>
//       <h1>Muneer Abbas</h1>
//       <p>This is a message</p>
//     </div>
//   );
// }

//We can change the above Component as follow

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

//You can make component using return or without return keyword
//Person
const Person = () => <h1>Muneer Abbas</h1>;
//Message
const Message = () => {
  return <p>This is a message</p>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
