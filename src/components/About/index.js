import React, { Component } from 'react';
import { Link } from 'react-router'
import { map } from 'lodash';

import './style.css';
import Header from '../Header'

export default class About extends Component {
  constructor() {
    super()
    this.state = {
      skills: [
        'React',
        'JavaScript',
        'jQuery',
        'React-Router',
        'CSS/SASS',
        'HTML',
        'Redux',
        'Git',
        'GitHub'
      ],
      experience: [
        {
          company: 'Turing School of Software and Design',
          position: 'Front-End Web Developer',
          dates: '(Aug 2016 - Current)'
        },
        {
          company: 'Manitou Springs School District',
          position: 'Math Instructor',
          dates: '(Aug 2014 - May 2016)'
        },
        {
          company: 'Manitou Springs School District',
          position: 'Fellow',
          dates: '(Jan 2014 - May 2016)'
        }
      ]
    }
  }

  render() {
    return (
      <div className='About'>
        <div className="header">
          <Header />
        </div>
        <section className='parallax'>
        </section>
        <img
          className='hilary-lewis-image'
          src={require ('./hilary-lewis.jpg')}
          role='none'
        />
      <h3 className='title'>About Me</h3>
      <section className='about'>
        <section className="summary">
          <p className="summary-paragraph">
            As a creative-minded front-end developer, I value using both my left and right brain. I enjoy using my technical skills to solve challenging problems and write efficient code while also using my creative side to design clean and unique user interface on applications and websites.
          </p>
          <br />
          <p className="summary-paragraph">
            As a lifelong learner, I am always looking to add useful skills. Whether it's becoming a web developer, math teacher, yoga instructor, or coaching soccer, learning is one of my most rewarding passions.
          </p>
        </section>
        <section className='experience-list'>
          <h3 className='experience'>EXPERIENCE</h3>
          {this.state.experience.map(item => {
            return(
              <div className='single-experience'>
                <h5 className='position'>{item.position}</h5>
                <h6 className='company'>{item.company}</h6>
                <p className='dates'>{item.dates}</p>
              </div>
            )
          })}
        </section>
        <section className="skills-list">
          <h3 className='skills'>SKILLS</h3>
          {this.state.skills.map(item => {
            return(
              <h5 className='single-skill'>{item}</h5>
            )
          })}
        </section>

        <Link to='/resume' activeClassName='active' className='resume-link'>View My Resume</Link>
      </section>
      </div>
    );
  }
}
