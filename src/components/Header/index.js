import React, { Component } from 'react';
import { Link } from 'react-router'

import './style.css';

export default class Header extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     open: false;
  //   }
  //
  //   handleClick() {
  //     this.setState({
  //         open: !this.state.open
  //     })
  //   }



  render() {
    return (
      <div role="nav" className='Header'>
        <div className='hamburger-cross'>
          <button className="hamburger">
            &#9776;
          </button>
          <button className="cross">
            &#735;
          </button>
        </div>

        <div className='menu'>
          <ul>
            <Link to="/" activeClassName="active" className='link'>
              Hilary
            </Link>

            <Link to="/projects" activeClassName="active" className='link right'>
              <li>Projects</li>
            </Link>

            <Link to="/about" activeClassName="active" className='link middle-nav right'>
              <li>About</li>
            </Link>

            <Link to="/contact" activeClassName="active" className='link right'>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
