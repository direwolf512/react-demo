import React from 'react';
import '../../css/index.css';
import '../../css/game/moves.css';

class Moves extends React.Component {
    render () {
        const moves = this.props.moves;
        return (
            <div className={this.props.orderStatus === 'ase' ? 'ascending' : 'descending'}>
                {moves.map((item, index) => {
                    const desc = index ? '返回第' + index + '步' : '开始游戏'; 
                    return (
                        <p className={this.props.step === index ? 'light-show' : null}
                            key={index} 
                            onClick={() => this.props.onClick(index)}>{desc}</p>
                    )
                })} 
            </div>
        )
    }
}

export default Moves;