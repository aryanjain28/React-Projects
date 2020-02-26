import React, { Component } from 'react';
// import SingleCard from '../components/SingleCard'
import '../css/grid.css'
import '../css/card.css'
import SingleCard from './SingleCard';

class MainGrid extends Component {

    constructor(props) {
        super(props)

        console.log("constructor");

        this.state = {
            prevID: null,
            prevColor: null
        }
    }

    changeState = (prevID, prevColor) => {
        this.setState({
            prevID: prevID,
            prevColor: prevColor
        });
    }

    getPrevColor = () => {
        return this.state;
    }

    cardGrid = () => {
        var cards = [];
        var color = [
            ['orange', 'black', 'grey', 'yellow', 'purple', 'blue', 'red', 'green'],
            ['orange', 'black', 'grey', 'yellow', 'purple', 'blue', 'red', 'green']
        ]

        var i = 0;
        for (let index = 0; index < 16; index++) {
            var picker = Math.floor(0 + Math.random() * (color[i].length - 0));
            var bgColor = color[i].splice(picker, 1);
            (i === 1) ? i -= 1 : i += 1
            cards.push(<SingleCard id={index + 1} color={bgColor} prevColor={null} changeState={this.changeState} getPrevState={this.getPrevColor} cardGrid={this.cardGrid} hidden={false} permanentState={false} />)
        }
        return cards;
    }

    render() {
        return (
            <div className='mainGrid'>
                {this.cardGrid()}
            </div>
        )
    }
}

export default MainGrid;