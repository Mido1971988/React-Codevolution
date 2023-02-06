import React, { Component } from 'react'

class ClassClick extends Component {
    render() {
        return (
            <div>
                <button onClick={this.clickFunc}>Click Me</button>
            </div>
        )
    }
    clickFunc(){
        console.log("Clicked")
    }
}

export default ClassClick