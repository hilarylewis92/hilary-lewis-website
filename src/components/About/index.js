import React, { Component } from 'react'
import { Link } from 'react-router'
import { map } from 'lodash'

import './style.css'
import Header from '../Header'
import Footer from '../Footer'


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
        'Git/GitHub'
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

        <section className='parallax-image'>
        </section>

        <img
          className='hilary-lewis-image'
          src={require ('./hilary-lewis.jpg')}
          role='none'
        />

        <section className='about-me'>
          <h3 className='title'>
            About Me
          </h3>

          <section className="summary">
            <p className="summary-paragraph">
              As a creative front end developer, I value using both my left and right brain. My technical skills help me solve challenging problems and write efficient code, while my creative side encourages me to design clean and unique user interfaces on applications and websites.
            </p>
            <br />
            <p className="summary-paragraph">
              As a lifelong learner, I am always looking to develop skills that will benefit my life holistically. Whether it's attending Turing School of Software and Design to learn the languages required of a front end web developer, graduating with a Bachelor of Mathematics from Baylor University or becoming a licensed yoga instructor, learning is my most rewarding passion.
            </p>
          </section>

          <section className='experience-list'>
            <h3 className='experience-heading heading'>
              EXPERIENCE
            </h3>

          {this.state.experience.map(item => {
            return(
              <div className='single-experience'>
                <h5 className='position'>
                  {item.position}
                </h5>

                <h6 className='company'>
                  {item.company}
                </h6>

                <p className='dates'>
                  {item.dates}
                </p>
              </div>
            )
          })}
        </section>

        <section className="skills-list">
          <h3 className='skills-heading heading'>
            SKILLS
          </h3>

          {this.state.skills.map(item => {
            return(
              <h5 className='single-skill'>
                {item}
              </h5>
            )
          })}
        </section>

        <section className='about-website-section'>
          <h4 className='about-website-heading heading'>
            ABOUT THIS WEBSITE
          </h4>

          <p>
            I build this website using <a href ='https://facebook.github.io/react/'
              className='underline'>
              React
            </a>, <a href ='https://github.com/ReactTraining/react-router/tree/master/docs'
               className='underline'>
               React Router
            </a>, and <a href ='https://github.com/facebookincubator/create-react-app'
               className='underline'>
               Create React App
            </a>.

            I used CSS for styling and responsiveness. Fonts are served through <a href ='https://fonts.google.com/'
               className='underline'>
               Google Fonts
            </a> and photos are served through <a href ='https://unsplash.com/'
               className='underline'>
               Unsplash
            </a>. To see the code I developed for this website, visit <a href = 'https://github.com/hilarylewis92/hilary-lewis-website'
               className='underline'>
               github
            </a>.
          </p>
        </section>

          <section className='resume-section'>
            <Link to='/about/resume'
              activeClassName='active'
              className='resume-link button'>
              View My Resume &rarr;
            </Link>
          </section>
        </section>

        <section className='footer-section'>
          <Footer />
        </section>
      </div>
    )
  }
}
