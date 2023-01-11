import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
    increment(){
        //When you change state directly without using setState you change it but not invoking Render Method so will change but will not shown on the page
        // this.state.count++
        // console.log(this.state.count)
        // this.setState({
        //     count : this.state.count < 5 ? this.state.count + 1 : "Enough"
        // }, () => console.log("CallBack", this.state.count))
        
        this.setState((prevState, props) => ({count : prevState.count + 1}), () => console.log("CallBack", this.state.count))

        // number in console will be less by 1 because setState is Async Method
        // console.log(this.state.count)
    }
    incrementFive(){
        // setTimeout(()=> this.increment(),1000)
        // setTimeout(()=> this.increment(),2000)
        // setTimeout(()=> this.increment(),3000)
        // setTimeout(()=> this.increment(),4000)
        
        //React groups multiple state updates into a single re-render for better performance
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
}

export default Counter