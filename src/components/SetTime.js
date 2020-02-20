import React, { Component } from 'react';
import '../css/submitPage.css'
import Timer from './Timer';

class SetTime extends Component {

    constructor(props) {
        super(props)
        var yyyy = new Date().getFullYear();
        var mm = new Date().getMonth() + 1;
        var dd = new Date().getDate();

        if (mm < 10) { (mm = "0" + mm) };
        if (dd < 10) { (dd = "0" + dd) };

        this.state = {
            eventName: 'Time up bro!',
            date: `${yyyy}-${mm}-${dd}`,
            redirect: false
        }
    }

    eventChangeHandler = (event) => {
        if (event.target.name === 'eventTitle') {
            this.setState({
                eventName: event.target.value
            });
        } else {
            this.setState({
                date: event.target.value,
                redirect: true,
            });
        }
    }

    render() {
        console.log(this.state.date);
        return (
            <div className="mainComponent">
                <form >
                    {/* <input className="generalText" type='text' placeholder="Event name" name='eventTitle' onChange={this.eventChangeHandler} /> */}
                    <input className="generalText" type='date' id='date' name='date' onChange={this.eventChangeHandler} /><br />
                    {(this.state.redirect) ? <div><Timer date={this.state.date} message={this.state.eventName} /></div> : null}
                </form>
            </div >
        )
    }
}
export default SetTime;