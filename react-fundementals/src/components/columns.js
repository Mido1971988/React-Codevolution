import React from 'react'

function Columns() {
    return (
        // we can not use <div> as parent element because will be added to DOM and will cause 
        // Error because td element can not be a child of div element
        <React.Fragment>
            <td>Name</td>
            <td>Soliman</td>
        </React.Fragment>
    )
}

export default Columns