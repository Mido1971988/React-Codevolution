import React, { Component } from 'react'
import UserContext , { ContextConsumer } from './UserContext'

class ComponentC extends Component {
    static contextType = UserContext
    render() {
        return (
        // <ContextConsumer>
        //     {
        //         (username) => {
        //             return <h1>Hello {username}</h1>
        //         }
        //     }
        // </ContextConsumer>

        <h1>Hello {this.context}</h1>
        )
    }
}

// ComponentC.contextType = UserContext
export default ComponentC