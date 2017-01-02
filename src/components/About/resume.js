import React, { Component } from 'react'
import { Link } from 'react-router'

import './style.css'
import About from '../About'

export default class Resume extends Component {
  render() {
    return (
      <div className='Resume'>
        <iframe
          src="https://resume.creddle.io/embed/fqzo0ru7jy5"
          width="850"
          height="1100"
          seamless>
        </iframe>

        <section className='view-about-section'>
          <Link to='/about'
            className='back button'>
            &larr; Back to About
          </Link>
        </section>
      </div>
    )
  }
}
