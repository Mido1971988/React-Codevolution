import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message : "Hello"
        }

        this.clickFunc = this.clickFunc.bind(this)
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* [1] use bind keyword in render method */}
                {/* <button onClick={this.clickFunc.bind(this)}>Click Me</button> */}
                
                {/* [2] use arrow function in render method */}
                {/* <button onClick={()=> this.clickFunc()}>Click Me</button> */}

                {/* [3] use arrow function as class prop */}
                {/* <button onClick={this.clickFuncArrow}>Click Me</button> */}

                {/* [4] use bind keyword in construtor */}
                <button onClick={this.clickFunc}>Click Me</button>
            </div>
        )
    }
    clickFunc(){
        this.setState({
            message : "Good Bye"
        })
    }

    clickFuncArrow = () => {
        this.setState({
            message : "Good Bye"
        })
    }
}

export default EventBind