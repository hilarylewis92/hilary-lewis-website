import React, { Component } from 'react';
import { Link } from 'react-router'

import Hamburger from './Hamburger'

import './style.css';

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  handleClick() {
    this.setState({
        open: !this.state.open
    })
  }

  render() {
    return (
      <div role="nav" className='Header'>
        <Hamburger
          isOpen={this.state.open}
          menuClicked={this.handleClick.bind(this)}
          width={25}
          height={20}
          strokeWidth={3}
          rotate={0}
          color='#84A58E'
          animationDuration={0.5}
        />

        <div className='menu'>
          <ul>
            <Link to="/"
              activeClassName="active"
              className='link'>
              <li>Home</li>
            </Link>

            <Link to="/projects"
              activeClassName="active"
              className='link right'>
              <li>Projects</li>
            </Link>

            <Link to="/about"
              activeClassName="active"
              className='link middle-nav right'>
              <li>About</li>
            </Link>

            <Link to="/contact"
              activeClassName="active"
              className='link right'>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
