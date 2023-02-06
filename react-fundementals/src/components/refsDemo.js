import React, { Component } from 'react'
class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.inputValue = this.inputValue.bind(this)
        this.state = {
            value : "Test"
        }
    }

    inputValue(){
        // console.log(this.inputRef.current.value)
        console.log(this.cbRef.value)
        this.setState({
            // value : this.inputRef.current.value
            value : this.cbRef.value
        })
    }

    setCbRef = element => {
        this.cbRef = element
    }

    componentDidMount(){
        // console.log(this.inputRef.current) // the input element
        // this.inputRef.current.focus()

        console.log(this.cbRef) // the input element
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    render() {
        return (
            <div>
                {/* <input type='text' ref={this.inputRef} onChange={this.inputValue}></input> */}
                <input type='text' ref={this.setCbRef} onChange={this.inputValue}></input>
                <h1>{this.state.value}</h1>
            </div>
        )
    }
}

export default RefsDemo