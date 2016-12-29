import React, { Component } from 'react';

import './style.css';
import Header from '../Header'

export default class Projects extends Component {
  constructor() {
    super()
    this.state = {
      projects: [
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
      <div>
        <div className="header">
          <Header />
        </div>

        <section className='recent-title-projects Projects'>
          <h3 className='recent-projects-title'>
            Projects
          </h3>

          <section className='recent-projects'>
            {this.state.projects.map(project => {
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
        </section>
      </div>
    );
  }
}
