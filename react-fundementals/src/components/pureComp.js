import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("Render of pureComp")
        return (
            <div>pureComp {this.props.name}</div>
        )
    }
}

export default PureComp