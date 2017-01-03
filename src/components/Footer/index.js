import React, { Component } from 'react';

import './style.css';

export default class Projects extends Component {

  render() {
    return (
      <section className='Footer'>
        <div className='single-contact'>
          <a href='mailto:hilarylewis92@gmail.com'
            className='mail'>
          </a>
        </div>

        <div className='single-contact'>
          <a href='https://www.linkedin.com/in/hilarylewis92'
            className='linkedin'>
          </a>
        </div>

        <div className='single-contact'>
          <a href='https://github.com/hilarylewis92'
            className='github'>
          </a>
        </div>

        <div className='single-contact'>
          <a href='https://twitter.com/hilarylewis92'
            className='twitter'>
          </a>
        </div>
      </section>
    );
  }
}
