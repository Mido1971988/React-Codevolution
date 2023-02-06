import React, { Component } from 'react'
import UpdatedComponent from './HOC' 

class HoverCounter extends Component {
    render() {
        const { count , incrementCount } = this.props
        return (
        <button onMouseOver={incrementCount}>Hovered {count} Times</button>
        )
    }
}

export default UpdatedComponent(HoverCounter , 5)