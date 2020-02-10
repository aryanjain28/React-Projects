import React, { Component } from 'react'
import Screen from './Screen'
import exprEval from 'expr-eval'
import CalciButton from './CalciButton'

class Buttons extends Component {

    constructor() {
        super()
        this.state = {
            expression: "0",
            resultFetched: false,
            color: 'black'
        }
    }

    clickHandler = (value) => {
        if (this.state.resultFetched) {
            this.setState({
                expression: '0',
                resultFetched: false,
                color: 'black'
            })
        }
        if (value === 'C') {
            this.setState({
                expression: "0"
            })
            return;
        } else if (value === '=') {
            try {
                var parser = new exprEval.Parser();
                var expr = parser.parse(this.state.expression + ' + x');
                var result = expr.evaluate({ x: 0 });
                console.log(result);
                this.setState({
                    expression: result,
                    resultFetched: true
                })
                return;
            } catch (error) {
                this.setState({
                    expression: "Incorrect Expression!",
                    resultFetched: true,
                    color: 'red'
                })
                return;
            }
        } else if (this.state.expression === '0') {
            if (value === '*' || value === '+' || value === '/' || value === '.' || value === '-') {
                this.setState({
                    expression: '0' + value
                });
                return;
            }
        }
        this.setState((prevState) => {
            if (prevState.expression === '0') {
                prevState.expression = ''
            }
            prevState.expression = prevState.expression + value;
            return prevState.expression;
        })
    }

    render() {
        return (
            <div>
                <Screen expression={this.state.expression} color={this.state.color} />
                <CalciButton clickHandler={this.clickHandler} />
            </div>
        )
    }
}

export default Buttons;