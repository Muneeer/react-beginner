import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Now that we know how to create components and pass data to them
//lets do a simple example
//One important thing about props is props are read-only
//more like const we can't change its value we can just read

//add simple css styles as you want to div
function ShoppingList() {
  return (
    <div>
      <Item name="Cheese" price="4.99" />
      <Item name="Bread" price="1.5" />
      <Item name="Ice Cream" price="24" />
    </div>
  );
}

const Item = (props) => {
  return (
    <div className="py-2 m-3 box">
      <b>Name: </b>
      {props.name}
      <br />
      <b>Price: </b>${props.price}
    </div>
  );
};

ReactDOM.render(<ShoppingList />, document.getElementById("root"));
