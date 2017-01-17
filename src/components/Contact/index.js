import React, { Component } from 'react';

import Header from '../Header'
import Footer from '../Footer'

import './style.css';

export default class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
        <div className="header">
          <Header />
        </div>

        <section className='contact-section'>
          <h1 className='contact-title'>
            Get in Touch
          </h1>

          <p className='contact-summary'>
            The best way to get in touch with me is to send me an email. I will try my best to respond in less than 24 hours.
          </p>
          <br />
          <a href='mailto:hilarylewis92@gmail.com' className='contact-email'>
            hilarylewis92@gmail.com
          </a>
          <br />
          <br />
          <p className='contact-summary'>
            You can also reach me through any social media below.
          </p>
        </section>

        <section className='footer-section'>
          <Footer />
        </section>
      </div>
    );
  }
}
