import React from "react";

// JSX Version
// const Hello = () => <h1 className="dumm">Hello Soliman</h1>

// JS Version
// createElement (1st param => type of element - 2nd param => properties like if you want to add class , 3rd param => ...children)
// const Hello = () => React.createElement("h1",null,"Hello Soliman")

// we can add children not only text but can add also another element - class should write as className when using React
// const Hello = () => React.createElement("div",{id : "hello" , className : "dumm"},React.createElement("h1",null,"Hello Soliman"))

// React update and you can add children as <h1></h1> no need for React.createElement for childrens
const Hello = () => React.createElement("div",{id : "hello" , className : "dumm"},<h1>Hello Soliman</h1>)

export default Hello