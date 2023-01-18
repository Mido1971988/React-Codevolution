import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName : "",
            comments : "",
            topic : "React"
        }
    }

    change = (event) => {
        this.setState({
            userName : event.target.id === "username" ? event.target.value : this.state.userName,
            comments : event.target.id === "comments" ? event.target.value : this.state.comments,
            topic : event.target.id === "topic" ? event.target.value : this.state.topic
        })
    }

    submit = (event)=> {
        console.log(`
        username : ${this.state.userName}
        comments : ${this.state.comments}
        topic : ${this.state.topic}
        ` 
        )
        event.preventDefault()
    }

    render() {
        return (
        <form onSubmit={this.submit}>
            <div>
                <label>Username</label>
                <input id="username" type="text" value={this.state.userName} onChange={this.change}></input>
            </div>
            <div>
                <label>Comments</label>
                <textarea id="comments" type="text" value={this.state.comments} onChange={this.change}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select id='topic' value={this.state.topic} onChange={this.change}>
                    <option value="Vue">Vue</option>
                    <option value="Angular">Angular</option>
                    <option value="React">React</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
        )
    }
}

export default Form