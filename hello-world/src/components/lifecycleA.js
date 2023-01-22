import React, { Component } from 'react'
import LifecycleB from './lifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name : "Soliman"
        }
        console.log("Constructor A")
        this.changeState = this.changeState.bind(this)
    }
    static getDerivedStateFromProps(props , state){
        console.log("getDerivedStateFromProps A")
        if(props.name !== state.name){ 
            //Change in props 
            return{ 
                name: props.name 
            }; 
        } 
        return null; // No change to state 
    }

    changeState(){
        this.setState((prevState, props) => {
            this.prevState = prevState
            return {name : "Mohamed"}
        })
    }

    componentDidMount(){
        console.log("componentDidMount A")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate A")
        return true
    }

    getSnapshotBeforeUpdate(prevProps ,prevState){
        console.log("getSnapshotBeforeUpdate A")
        return null
    }

    componentDidUpdate(prevProps , prevState, snapshot){
        console.log(prevProps , prevState, snapshot)
        console.log("componentDidUpdate A")
    }

    render() {
        console.log("Render A")
        return (
            <div>
                <div>lifecycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA