import React, { Component } from 'react';
import { Link } from 'react-router'
import { map } from 'lodash';

import './style.css';
import Header from '../Header'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import Footer from '../Footer'

export default class App extends Component {
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


  render() {
    return (
      <div className='App'>
        <div className="header">
          <Header />
        </div>

        <section className='hero-background-image'>
          <section className='hero-text-landing'>
            Hilary Lewis
            <br />
            <br />
            Front-end development
            <br />
            Denver, Colorado
          </section>
        </section>

        <section className='recent-projects-section'>
          <h3 className='recent-projects-title'>
            Recent Projects
          </h3>

          <section className='recent-projects'>
            {this.state.recent.map(project => {
              return(
                <div className='list-recent-projects'>
                  <a href={project.url}>
                    <h4 className='project-title'>{project.title}</h4>
                    <img className='recent-projects-images' src={require(project.src)} role='none' />
                  </a>
                </div>
              )
            })}
          </section>
          <Link to='/projects' className='view-more-projects'>View More &rarr; </Link>
        </section>
      </div>
    );
  }
}

// CREATIVE PROBLEM SOLVER.
// Hilary Lewis.
// Front-end web developer in Denver, Colorado.
  // I'm a front-end developer in Denver, Colorado passionate about connecting the art of design with the science of programming.
