import React, { Component } from 'react'

class Screen extends Component {

    constructor() {
        super()
        this.state = {
            expression: 0
        }
    }

    render() {
        return (
            <div><h1 style={{ color: this.props.color }}>{this.props.expression}</h1></div >
        )
    }
}

export default Screen;