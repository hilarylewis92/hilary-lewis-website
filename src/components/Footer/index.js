import React, { Component } from 'react';

import './style.css';

export default class Projects extends Component {
  constructor() {
    super()
    this.state = {
      contacts: [
        {src: './images/mail.png',
        hover: './images/mail-hover.png',
        url: 'mailto:hilarylewis92@gmail.com',
        title: 'email'},
        {src: './images/linkedin.png',
        hover: './images/linkedin-hover.png',
        url: 'https://www.linkedin.com/in/hilarylewis92',
        title: 'linkedin'},
        {src: './images/github.png',
        hover: './images/github-hover.png',
        url: 'https://github.com/hilarylewis92',
        title: 'github'},
        {src: './images/twitter.png',
        hover: './images/twitter-hover.png',
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

        <p className='copyright'>
          &copy; 2017 Hilary Lewis. All rights reserved.
        </p>
      </section>
    );
  }
}
