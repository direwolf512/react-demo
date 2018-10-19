import React from 'react';
import Square from './Square';
import '../index.css';

class Board extends React.Component {
    renderSquare (i) {
        const winnerSquares = this.props.winnerSquares;
        let ifActive = false;
        for (let j = 0; j < winnerSquares.length; j++) {
					console.log(winnerSquares[j]);
					if (winnerSquares[j].indexOf(i) > -1) {
					    ifActive = true;
          }
        }
        return (
            <Square 
                ifActive={ifActive}
                squares={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)} />
        )
    }

    render () {
        return (
            <div>
                {this.props.squares.map((item, index) => {
                    if (index % 3 === 0) {
                        return (
                            <div key={index} className='board-row'>
                                {[0, 1, 2].map((item, i) => {
                                    return (
                                        <div key={index + i}>
                                            {this.renderSquare(index + i)}
                                        </div>
                                    )                                   
                                })}
                            </div>
                        )
                    }                    
                })}
            </div>
        )
    }
}

export default Board;