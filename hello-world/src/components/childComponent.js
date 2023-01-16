import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            {/* if we want to add parameter to greetHandler method we can use arrow function */}
            <button onClick={()=>props.greetHandler("Mohamed")}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent