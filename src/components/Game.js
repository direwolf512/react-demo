import React from 'react';
import Board from './Board'
import Moves from './Moves'
import '../index.css'

class Game extends React.Component {
    constructor () {
        super();
        this.state = {
            history: [{
                square: Array(9).fill(null)
            }],
            stepNum: 0,
            isXTurn: true,
            orderStatus: 'ase'
        }
    }

    handleClick (i) {
        const history = this.state.history.slice(0, this.state.stepNum + 1);
        const current = history[history.length - 1];
        const squares = current.square.slice();

        if (whoIsWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.isXTurn ? 'x' : 'o';
        this.setState({
            history: history.concat({
                square: squares
            }),
            stepNum: this.state.stepNum + 1,
            isXTurn: !this.state.isXTurn
        })
    }

    jumpTo (step) {
        this.setState({
            history: step === 0 ? [{square: Array(9).fill(null)}] : this.state.history,
            stepNum: step,
            isXTurn: step % 2 === 0
        })
    }

    orderChange () {
        this.setState({
            orderStatus: this.state.orderStatus === 'ase' ? 'desc' : 'ase'
        })
    }

    render () {
        const history = this.state.history;
        const current = history[this.state.stepNum];
        let status; 
        const winner = whoIsWinner(current.square) ? whoIsWinner(current.square).winner : null;
        const winnerSquares = whoIsWinner(current.square) ? whoIsWinner(current.square).winnerSquares : [];
        const order = this.state.orderStatus === 'ase' ? '升序排列' : '降序排列';

        if (winner) {
            status = 'Winner is ' + winner;
        } else if (this.state.stepNum === 9) {
            status = 'Game is over';
        } else {
            status = this.state.isXTurn ? 'Next player is x' : 'Next player is o';
        }
        return (
            <div className='game'>
                <div className='game-board'>
                    <Board 
                        winnerSquares={winnerSquares}
                        onClick={(i) => this.handleClick(i)} 
                        squares={current.square} />
                </div>
                <div className='game-info'>
                    <p>{status}</p>
                    <button onClick={() => this.orderChange()}>
                        {order}
                    </button>
                    <ul>
                        <Moves 
                            step={this.state.stepNum}
                            orderStatus={this.state.orderStatus}
                            moves={history} 
                            onClick={(i) => this.jumpTo(i)} />
                    </ul>
                </div>               
            </div>
        )
    }
}

function whoIsWinner (squares) {
    const winnerList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let winnerSquareList = [];
    let winner;
    for (let i = 0; i < winnerList.length; i++) {
        let [a, b, c] = winnerList[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            winner = squares[a];
					  winnerSquareList.push(winnerList[i]);
        }
    }
    return winner ? {winner: winner, winnerSquares: winnerSquareList} : null;
}

export default Game;