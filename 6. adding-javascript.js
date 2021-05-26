import React from "react";
import ReactDom from "react-dom";
import "./index.css";
//JavaScript in JSX
function BookList() {
  return (
    <div className="container">
      <div className="row">
        <Book />
      </div>
    </div>
  );
}

const Book = () => {
  return (
    <div className="col-sm p-2 m-3 round-shadow bg-white ">
      <Image />
      <Title />
      <Author />
    </div>
  );
};
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);
//{} you can only use something that returns a value
//e.g 6+6 etc. you can not write a js statement like let var =...

const Title = () => {
  const Title = "I Love you to the Mooon and Back"; //a constant
  return <h3>{Title}</h3>; //using the const in {}
};
const Author = () => {
  const Author = "Amelia Hepworth";
  return <h5>{Author.toUpperCase()}</h5>; //you can use js functions too
};

ReactDom.render(<BookList />, document.getElementById("root"));
