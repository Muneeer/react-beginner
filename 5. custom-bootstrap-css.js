import React from "react";
import ReactDom from "react-dom";
import "./index.css";
//Custom CSS
//add a file in src named index.css or whatever you name

//Bootstrap
//link bootstrap cdn in public/index.html
//use bootstrap  properties like grid system as below
function BookList() {
  return (
    <div className="container">
      {" "}
      //
      <div className="row">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
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

const Title = () => <h3>I Love you to the Mooon and Back</h3>;
const Author = () => <h5>Amelia Hepworth</h5>;

ReactDom.render(<BookList />, document.getElementById("root"));
