import React, { Component } from 'react'

class CalciButton extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler(1)} value={"1"}><h3>1</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler(2)} value={"2"}><h3>2</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler(3)} value={3}><h3>3</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler("+")} value={"+"}><h3>+</h3></button></td>
                    </tr>
                    <tr>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler(4)} value={4}><h3>4</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler(5)} value={5}><h3>5</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler(6)} value={6}><h3>6</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler('-')} value={"-"}><h3>-</h3></button></td>
                    </tr>
                    <tr>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler(7)} value={7}><h3>7</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler(8)} value={8}><h3>8</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler(9)} value={9}><h3>9</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler("*")} value={"*"}><h3>x</h3></button></td>
                    </tr>
                    <tr>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler(".")} value={"."}><h3>.</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler(0)} value={0}><h3>0</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler("^")} value={"#"}><h3>^</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler("=")} value={"="}><h3>=</h3></button></td>
                    </tr>
                    <tr>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler("C")} value={"C"}><h3>C</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler("(")} value={"C"}><h3>(</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler(")")} value={"C"}><h3>)</h3></button></td>
                        <td><button style={{ width: "100%" }} onClick={() => this.props.clickHandler("/")} value={"C"}><h3>/</h3></button></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default CalciButton;