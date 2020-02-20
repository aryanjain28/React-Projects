import React, { Component } from 'react'
import '../css/submitPage.css'

class Timer extends Component {

    constructor(props) {
        super(props)

        const date = props.date.split('-');

        const futureDate = new Date(date[0], date[1] - 1, date[2], 23, 59, 59);
        const currentDate = new Date();
        const oneDay = 24 * 60 * 60 * 1000;
        const days = Math.round(Math.abs((futureDate - currentDate) / oneDay)) - 1;
        const seconds = Math.abs(futureDate.getSeconds() - currentDate.getSeconds());
        const minutes = Math.abs(futureDate.getMinutes() - currentDate.getMinutes());
        const hours = Math.abs(futureDate.getHours() - currentDate.getHours());

        this.state = {
            days: (days < 0) ? 0 : days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            hidden: true,
            message: props.message,
            hideComplete: false
        }
        setInterval(this.countDownTimer, 1000);
    }

    componentWillReceiveProps = (newProps) => {
        const date = newProps.date.split('-');

        if (date.length < 2) {
            this.setState({
                hideComplete: true
            })
            return;
        }

        const futureDate = new Date(date[0], date[1] - 1, date[2], 23, 59, 59);
        const currentDate = new Date();
        const oneDay = 24 * 60 * 60 * 1000;
        const days = Math.round(Math.abs((futureDate - currentDate) / oneDay)) - 1;
        const seconds = Math.abs(futureDate.getSeconds() - currentDate.getSeconds());
        const minutes = Math.abs(futureDate.getMinutes() - currentDate.getMinutes());
        const hours = Math.abs(futureDate.getHours() - currentDate.getHours());

        this.setState({
            days: (days < 0) ? 0 : days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            hidden: true,
            message: newProps.message,
            hideComplete: false
        });
    }

    countDownTimer = () => {

        const days = this.state.days;
        const hours = this.state.hours;
        const seconds = this.state.seconds;
        const minutes = this.state.minutes;

        if (seconds <= 0) {
            if (minutes <= 0) {
                if (hours <= 0) {
                    if (days <= 0) {
                        this.setState({
                            hidden: false
                        })
                    } else {
                        this.setState({
                            seconds: 59,
                            minutes: 59,
                            hours: 23,
                            days: days - 1
                        });
                    }
                } else {
                    this.setState({
                        seconds: 59,
                        minutes: 59,
                        hours: hours - 1
                    });
                }
            } else {
                this.setState({
                    seconds: 59,
                    minutes: minutes - 1
                });
            }
        } else {
            this.setState({
                seconds: seconds - 1
            });
        }
    }

    render() {
        return (
            <div>
                {(this.state.hideComplete) ? null :
                    <div>
                        <h1 className="countDownText">COUNTDOWN</h1>
                        <div className="countDownItem">
                            <div className="timerCount">{(this.state.days < 10) ? `0${this.state.days}` : `${this.state.days}`}</div ><br />
                            <div className="timerText">Days</div>
                        </div>

                        <div className="countDownItem">
                            <div className="timerCount">{(this.state.hours < 10) ? `0${this.state.hours}` : `${this.state.hours}`}</div><br />
                            <div className="timerText">Hours</div>
                        </div>

                        <div className="countDownItem">
                            <div className="timerCount">{(this.state.minutes < 10) ? `0${this.state.minutes}` : `${this.state.minutes}`}</div ><br />
                            <div className="timerText">Minutes</div>
                        </div>

                        <div className="countDownItem">
                            <div className="timerCount">{(this.state.seconds < 10) ? `0${this.state.seconds}` : `${this.state.seconds}`}</div ><br />
                            <div className="timerText">Seconds</div>
                        </div>
                        {(!this.state.hidden) ? <h1>{this.props.message}</h1> : null}
                    </div>
                }
            </div>

        )
    }
}

export default Timer;