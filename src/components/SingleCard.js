import React, { Component } from 'react';
import '../css/card.css'

class SingleCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cardID: props.id,
            hidden: props.hidden,
            permanentState: props.permanentState,
            color: props.color
        }
    }

    clickHandler = () => {

        this.setState({
            hidden: true
        });

        this.props.changeState(this.state.cardID, this.state.color);

        var timer = setTimeout(() => {
            console.log("timer");
            this.setState({
                hidden: false
            });
            this.props.changeState(null, null);
        }, 1000);

        // return;
        var prevID = this.props.getPrevState().prevID;
        var prevColor = this.props.getPrevState().prevColor;
        var currentColor = this.state.color;
        var currentID = this.state.cardID;

        if ((prevColor + '' === currentColor + '') && (prevID !== currentID)) {
            // current
            console.log("Matched");

            this.setState(() => {
                while (timer--) {
                    // console.log(timer);
                    clearTimeout(timer);
                }
                return { permanentState: true }
            }, () => {
                new SingleCard(this.state)
            });
        }
    }

    render() {
        return (
            <div>
                {
                    (this.state.permanentState) ?
                        <div className='frame'>
                            <div className='card-back' style={{ backgroundColor: this.state.color }}></div>
                        </div>
                        :
                        (this.state.hidden) ?
                            <div className='frame'>
                                <div className='card-back' style={{ backgroundColor: this.state.color }}></div>
                            </div>
                            :
                            <div className='frame'>
                                <div className='card-front' onClick={this.clickHandler}></div>
                            </div>
                }
            </div>
        )
    }
}

export default SingleCard;