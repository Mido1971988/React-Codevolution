import React, { Component } from 'react'
import UpdatedComponent from './HOC'

class ClickCounter extends Component {
    render() {
        const { count , incrementCount , name } = this.props
        return (
        <button onClick={incrementCount}>{name} Clicked {count} Times</button>
        )
    }
}

export default UpdatedComponent(ClickCounter , 10)