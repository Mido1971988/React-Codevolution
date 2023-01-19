import React, { Component } from 'react'
import LifecycleB from './lifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name : "Soliman"
        }
        console.log("Constructor A")
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

    componentDidMount(){
        console.log("componentDidMount A")
    }
    render() {
        console.log("Render A")
        return (
            <div>
                <div>lifecycleA</div>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
}

export default LifecycleA