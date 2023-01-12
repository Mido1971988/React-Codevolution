import React from 'react'

function FunctionClick() {
    function clickFunc (){
        console.log("Clicked")
    }
    return (
        <div>
            <button onClick={clickFunc}>Click</button>
        </div>
    )
}

export default FunctionClick