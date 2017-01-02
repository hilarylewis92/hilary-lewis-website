import React, { Component } from 'react';
import { Link } from 'react-router'

import './style.css';

export default class Dropdown extends Component {
  render() {
    return (
      <div role="nav" className='Dropdown'>
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
      </div>
    );
  }
}
