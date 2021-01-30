import React, { Component } from 'react'

export default class Button extends Component {
    handleClick() {
        console.log("Ben button habercisi")
       
      }
    render() {
        return (
            <button onClick={this.handleClick}>
                I am lower button
            </button>
            
        )
    }
}
