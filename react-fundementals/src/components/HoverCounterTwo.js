import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    render() {
        const { count , incrementCount } = this.props
        return (
        <button onMouseOver={incrementCount}>Hovered {count} Times</button>
        )
    }
}

export default HoverCounterTwo