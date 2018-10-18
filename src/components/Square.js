import React from 'react';
import '../index.css'

class Square extends React.Component {
    render () {
        return (
            <div>
                <span 
                    className={`square ${this.props.ifActive ? 'winner-square' : null}`}
                    // onClick={this.handleClick.bind(this)}>{this.state.square}</span>
                    // onClick={() => this.props.onClick()}>{this.props.squares}</span>
                    onClick={() => {this.props.onClick()}}>{this.props.squares}</span>
            </div>
        )
    }
}

export default Square;