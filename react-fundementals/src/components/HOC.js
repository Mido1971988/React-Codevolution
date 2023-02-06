import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent , incrementNum) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props)
            
            this.state = {
                count : 0
            }
        }
    
        incrementCount = () => {
            this.setState( prevState => {
                return {
                    // count : prevState.count + 1
                    count : prevState.count + incrementNum
                }
            })
        }
    
        render() {
            return (
                <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props}></OriginalComponent>
            )
        }
    }
    return NewComponent
}


export default UpdatedComponent