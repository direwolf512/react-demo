import React from 'react';
import '../../css/home/home.css';

class Home extends React.Component {
    render () {
    console.log(this.props.location);
        return (
            <div>
                home
            </div>
        )
    }
}

export default Home;