import React from 'react'

const FRInput = React.forwardRef(function FRInput(props,ref) {
    return (
        <input type="text" ref={ref}></input>
    )
})

export default FRInput