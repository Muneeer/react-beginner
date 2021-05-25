import React from 'react' //ES6 module
import ReactDom from 'react-dom'

function Greeting(){ //always capital to let react knows that this is not a function and its a component
  return <h4>This is Muneer and this is my first component</h4> //must return
} //Component created
 //adding component to our index HTML
 ReactDom.render(<Greeting/>,document.getElementById('root'))