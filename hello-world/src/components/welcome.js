// Class Component

import React , {Component} from "react"

// class Welcome extends Component{
//     render(){
//         return <h1>Class Component</h1>
//     }
// }

class Welcome extends Component{
    render(){
        return (
            <div>
                <h1>Hello {this.props.name} your hero is {this.props.heroName}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome 