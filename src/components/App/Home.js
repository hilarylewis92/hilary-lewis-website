import React, { Component } from 'react'
import { Link } from 'react-router'
import { map } from 'lodash'
import { TweenMax } from 'gsap'

import './style.css'

export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      recent: [
        {url: 'https://nimblenetwork-d13c3.firebaseapp.com/',
        src: './images/nimble-network.png',
        title: 'Nimble Network'},
        {url: 'https://shoot-the-breeze-1be68.firebaseapp.com/',
        src: './images/shoot-the-breeze.png',
        title: 'Shoot the Breeze'},
        {url: 'https://hilarylewis92.github.io/weather-forecast/#/?_k=myzv4x',
        src: './images/weather-dux.png',
        title: 'Weather Dux'}
      ]
    }
  }
  
  componentDidMount() {
    this.gsapHeroAnimation()
  }

  gsapHeroAnimation() {
    TweenMax.to('.hero-text-landing', 1.5,
    {bottom: 220}
    )
  }

  render() {
    return (
      <div className='Home'>
        <section className='hero-background-image'>
          <section className='hero-text-landing'>
            HILARY LEWIS
            <br />
            Front-End Developer
            <br />
            Denver, Colorado
          </section>
        </section>

        <section className='recent-projects-section'>
          <h3 className='recent-projects-title'>
            Recent Projects
          </h3>

          <section className='recent-projects-list'>
            {this.state.recent.map(project => {
              return(
                <div className='single-project'>
                  <a href={project.url}>
                    <h4 className='project-title'>
                      {project.title}
                    </h4>

                    <img
                      className='project-image'
                      src={require(project.src)}
                      role='none'
                    />
                  </a>
                </div>
              )
            })}
          </section>

          <section className='view-more-section'>
            <Link to='/projects'
              className='view-more-projects button'>
              View More Projects &rarr;
            </Link>
          </section>
        </section>
      </div>
    );
  }
}
