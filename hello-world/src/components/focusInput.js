import React, { Component } from 'react'
import Input from './input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.inputComp = React.createRef()
    }
    
    focusHandler(){
        this.inputComp.current.focusEl()
    }

    render() {
        return (
            <div>
                <Input ref={this.inputComp}></Input>
                <button onClick={this.focusHandler.bind(this)}>Focus</button>
            </div>
        )
    }
}

export default FocusInput