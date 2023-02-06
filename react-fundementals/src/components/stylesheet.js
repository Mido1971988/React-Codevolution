import React from 'react'
import "./myStyles.css"

function Stylesheet(props) {
    return (
        <div>
            <h1 className={`${props.primary ? "primary" : ""} font-xl`}>stylesheet</h1>
        </div>
    )
}

export default Stylesheet