import React, { Component } from 'react'

class ClassCounterThree extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            firstName : "",
            lastName : ""
        }
    }
    render() {
        return (
            <div>
                <input typeof='text' value={this.state.firstName} onChange={e=> this.setState({firstName : e.target.value})}></input>
                <input typeof='text' value={this.state.lastName} onChange={e=> this.setState({lastName : e.target.value})}></input>
                <h1>Your First Name is {this.state.firstName}</h1>
                <h1>Your Last Name is {this.state.lastName}</h1>
                <h2>name object {JSON.stringify(this.state)}</h2>
            </div>
        )
    }
}

export default ClassCounterThree