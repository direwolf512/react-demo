import React from 'react';
import '../../css/nav/nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor () {
    super();
    this.state = {
      navList: [{
        href: '/',
        title: 'Home'
      }, {
        href: '/game',
        title: 'Game'
      }, {
        href: '/list',
        title: 'List'
      }]
    }
  }
  render () {
    const navList = this.state.navList;
    return (
      <div className='home-nav'>
        {navList.map((item, index) => {
          return (
            <div className='nav-item' key={index}>
              <Link to={navList[index].href}>{navList[index].title}</Link>
            </div>
          )
        })}
      </div>      
    )   
  }
}

export default Nav;