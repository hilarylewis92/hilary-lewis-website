import React, { Component } from 'react';

import Header from '../Header'
import './style.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <h1>
          Contact
        </h1>
      </div>
    );
  }
}
