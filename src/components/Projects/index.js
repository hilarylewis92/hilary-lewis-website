import React, { Component } from 'react';
import Masonry from 'react-masonry-component'

import './style.css';
import Header from '../Header'
import Footer from '../Footer'

var masonryOptions = {
  transitionDuration: 1
}

export default class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: [
        {url: 'https://the-unreasonable-challenge.firebaseapp.com/',
        src: './images/the-unreasonable-challenge.png',
        title: 'The Unreasonable Challenge'},
        {url: 'https://nimblenetwork-d13c3.firebaseapp.com/',
        src: './images/nimble-network.png',
        title: 'Nimble Network'},
        {url: 'https://github.com/hilarylewis92/number-guesser-react',
          src: './images/number-guesser-react.jpg',
          title: 'Number Guesser'},
        {url: 'https://hilarylewis92.github.io/weather-forecast/#/?_k=myzv4x',
        src: './images/weather-dux.png',
        title: 'Weather Dux'},
        {url: 'https://shoot-the-breeze-1be68.firebaseapp.com/',
        src: './images/shoot-the-breeze.png',
        title: 'Shoot the Breeze'},
        {url: 'https://hilarylewis92.github.io/2DoBox-Pivot/',
        src: './images/2-do-box.png',
        title: '2 Do Box'},
        {url: 'https://hilarylewis92.github.io/gametime/',
        src: './images/game-time.png',
        title: 'Pumpkin Smasher'},
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>

        <section className='Projects'>
          <h3 className='projects-title'>
            My Projects
          </h3>

          <Masonry
            className={'projects-list'}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}>

            {this.state.projects.map(project => {
              return(
                <li className='single-project'>
                  <a href={project.url}
                    target='_blank'>
                    <img className='project-image'
                      src={require(project.src)}
                      role='none'
                    />
                  </a>
                </li>
              )
            })}

          </Masonry>
        </section>

        <section className='footer-section'>
          <Footer />
        </section>
      </div>
    );
  }
}
