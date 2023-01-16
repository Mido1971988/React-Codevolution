import React, { Component } from 'react'
import ChildComponent from './childComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            parentName : "Parent"
        }
        this.changeState = this.changeState.bind(this)
        this.greetParent = this.greetParent.bind(this)
    }

    changeState(){
        // if we use this will print on console hello parent because setState Method is ASYNC
        // so console.log() will print hello parent before setState will change the state
        // this.setState({
        //     parentName : this.props.name
        // })
        // console.log(`hello ${this.state.parentName}`)

        // to solve this problem we use the 2nd parameter of setState Method 
        // so will print hello soliman only after changing the state
        this.setState({
            parentName : this.props.name
        },
        ()=> console.log(`hello ${this.state.parentName}`))
    }

    greetParent(childName){
        // alert(`hello ${this.state.parentName}`)

        this.setState({
            parentName : this.props.name
        },
        ()=> alert(`hello ${this.state.parentName} from ${childName}`))
    }

    render() {
        return (
            // <div onClick={this.changeState}>Click to Greet</div>
            // <div onClick={this.greetParent}>Click to Greet</div>
            <ChildComponent greetHandler={this.greetParent}></ChildComponent>
        )
    }
}

export default ParentComponent