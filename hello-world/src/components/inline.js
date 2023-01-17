import React from 'react'

const heading = {
    fontSize : "72px",
    color : "blue"
}

function Inline() {
    return (
        <div>
            {/* can access CSS File which imported to parent component (APP.js) */}
            <h1 className='error'>Regular CSS</h1>

            {/*can not access Module Component because styles variable locally scoped in parent component (APP.js)  */}
            {/* <h1 className={styles.success}>Module CSS</h1> */}
            
            <h1 style={heading}>inline</h1>
        </div>
    )
}

export default Inline