import React from 'react';

import GameBoard from './GameBoard';

import './board.css';

class Board extends React.Component {

    state = {
        numberOfPlayers: this.props.numberOfPlayers,
        timePerRound: this.props.timePerRound,
        difficulty: this.props.difficulty
    }

    render() {
        return (
            <div>
                <header>
                    <div className="ui blue label">
                    Number Of Players
                        <div className="detail">{this.state.numberOfPlayers}</div>
                    </div>
                    <div className="ui teal label">
                    Time Per Round
                        <div className="detail"> {this.state.timePerRound}</div>
                    </div>
                    <div className="ui yellow label">
                    Difficulty
                        <div className="detail">{this.state.difficulty}</div>
                    </div>
                </header>
                <GameBoard
                    numberOfPlayers={this.state.numberOfPlayers}
                    timePerRound={this.state.timePerRound}
                    difficulty={this.state.difficulty}/>
            </div>
        )
    }
    
}

export default Board;