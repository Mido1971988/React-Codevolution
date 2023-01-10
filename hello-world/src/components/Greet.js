// Functional Component

import React from "react"

// function Greet(){
//     return <h1>Hello Soliman</h1>
// }

// you can return only one HTML element so use one div element for every thing
// props.children to get children element between <Greet></Greet>
const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name} your hero is {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet