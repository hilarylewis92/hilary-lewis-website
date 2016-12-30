import React, { Component } from 'react';

import './style.css';

export default class Projects extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [
        {src: './images/facebook.png',
        url: 'https://www.facebook.com/hilary.lewis.9',
        title: 'facebook'},
        {src: './images/linkedin.png',
        url: 'https://www.linkedin.com/in/hilarylewis92',
        title: 'linkedin'},
        {src: './images/github.png',
        url: 'https://github.com/hilarylewis92',
        title: 'github'},
        {src: './images/twitter.png',
        url: 'https://twitter.com/hilarylewis92',
        title: 'twitter'}
      ]
    }
  }

  render() {
    return (
      <section className='Footer'>
        {this.state.contacts.map(contact => {
          return(
            <div className='single-contact'>
              <a href={contact.url}>
                <img className='single-contact-icon'
                  src={require(contact.src)}
                  role='none'
                />
              </a>
            </div>
          )
        })}
      </section>
    );
  }
}
