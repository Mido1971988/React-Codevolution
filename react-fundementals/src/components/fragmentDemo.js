import React from 'react'

function FragmentDemo() {
    return (
        // component should have one parent element which is has children elements but the parent (div) will be added to DOM
        // <div>
        //     <h1>Fragment Demo</h1>
        //     <p>This is a paragraph to describe Fragment</p>
        // </div>

        // but you can solve this problem with React.Fragment so no parent (div) will be added to DOM
        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This is a paragraph to describe Fragment</p>
        </React.Fragment>
    )
}

export default FragmentDemo