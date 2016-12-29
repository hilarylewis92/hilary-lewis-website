import React, { Component } from 'react';
import { Link } from 'react-router'

import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div role="nav" className='Header'>
        <Link to="/" activeClassName="active" className='link'>
          Hilary
        </Link>
        <Link to="/contact" activeClassName="active" className='link right'>
          Contact
        </Link>
        <Link to="/about" activeClassName="active" className='link middle-nav right'>
          About
        </Link>
        <Link to="/projects" activeClassName="active" className='link right'>
           Projects
        </Link>
      </div>
    );
  }
}
