import React, { Component } from 'react'
import { Link } from 'react-router'
import { map } from 'lodash'
import { TweenMax } from 'gsap'
import Masonry from 'react-masonry-component'

import './style.css'


var masonryOptions = {
  transitionDuration: 1
}

export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      recent: [
        {url: 'https://the-unreasonable-challenge.firebaseapp.com/',
        src: './images/the-unreasonable-challenge.png',
        title: 'The Unreasonable Challenge'},
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
    {top: 220}
    )
  }

  render() {
    return (
      <div className='Home'>
        <section className='hero-background-image'>
          <section className='hero-text-landing'>
            <div className='name'>
              HILARY LEWIS
            </div>
            Front-End Developer
            <br />
            Denver, Colorado
          </section>
        </section>

        <section className='recent-projects-section'>
          <h3 className='recent-projects-title'>
            Most Recent Projects
          </h3>

          <section className='recent-projects-list'>

            <Masonry
              className={'projects-list'}
              elementType={'ul'}
              options={masonryOptions}
              disableImagesLoaded={false}
              updateOnEachImageLoad={false}>

              {this.state.recent.map(project => {
                return(
                  <div className='single-project'>
                    <a href={project.url}
                      target='_blank'>
                      <img
                        className='project-image'
                        src={require(project.src)}
                        role='none'
                      />
                    </a>
                  </div>
                )
              })}
            </Masonry>
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
