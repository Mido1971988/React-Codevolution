import React, { Component } from 'react'
import PureComp from './pureComp'
import RegComp from './regComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name : "Soliman"
        }
    }

    num = 0;

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                // here changing state every 2 seconds so pure component and regular Component will render
                // name : this.num++

                // here changing state to the same value so only regular component will render but pure component will not  
                name : "Soliman"
            })
        } , 2000)
    }
    render() {
        console.log("Render of parentComp")
        return (
        <div>
            <PureComp name={this.state.name}></PureComp>
            <RegComp name={this.state.name}></RegComp>
        </div>
        )
    }
}

export default ParentComp