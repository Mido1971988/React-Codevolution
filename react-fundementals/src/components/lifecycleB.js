import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name : "Soliman"
        }
        console.log("Constructor B")
    }
    static getDerivedStateFromProps(props , state){
        console.log("getDerivedStateFromProps B")
        if(props.name !== state.name){ 
            //Change in props 
            return{ 
            name: props.name 
            }; 
        } 
        return null; // No change to state
    }

    componentDidMount(){
        console.log("componentDidMount B")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate B")
        return true
    }

    getSnapshotBeforeUpdate(prevProps ,prevState){
        console.log("getSnapshotBeforeUpdate B")
        return null
    }

    componentDidUpdate(prevProps , prevState, snapshot){
        console.log("componentDidUpdate B")
    }

    render() {
        console.log("Render B")
        return (
            <div>lifecycleB</div>
        )
    }
}

export default LifecycleB