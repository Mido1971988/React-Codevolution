import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log("Render of regComp")
        return (
        <div>regComp {this.props.name}</div>
        )
    }
}

export default RegComp