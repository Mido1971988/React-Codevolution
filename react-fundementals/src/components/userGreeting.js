import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn : false ,
            userName : "Guest"
        }
    }

    login(){
        this.setState({
            isLoggedIn : true,
            userName : this.props.name
        })
    }

    render() {
        // [1] if/else
        // if(this.state.isLoggedIn){
        //     return <h1>Welcome Guest</h1>
        // }else{
        //     return <h1>Welcome</h1>
        // }

        // [2] using variable
        // let message = this.state.isLoggedIn ? <h1>Welcome Guest</h1> : <h1>Welcome</h1>
        // return message

        // [3] ternary operator
        // return this.state.isLoggedIn ? <h1>Welcome Guest</h1> : <h1>Welcome</h1>

        // [4] short circuit operator
        // return this.state.isLoggedIn && <div><h1>Welcome Guest</h1></div>

        // trying with login method
        return (
            <div>
                <h1>Welcome {this.state.userName}</h1>
                <button onClick={this.login.bind(this)}>Log In</button>
            </div>
        )
    }
}

export default UserGreeting