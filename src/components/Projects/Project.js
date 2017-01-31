import React, { Component } from 'react'

import ProjectsList from './ProjectsList.js'
import Footer from '../Footer'
import Header from '../Header'


export default class Project extends Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
  }

  componentDidMount() {
    this.setState({
      index: this.props.params.id
    })
  }

  render() {
    const { index } = this.state
    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <section className='individual-project'>
          <section className='project-left'>
            <img
              className='individual-project-image'
              src={require(ProjectsList[index].src)}
              role='none'
              />
          </section>

          <section
            className='project-right'>
            <h1
              className='project-title'>
              {ProjectsList[index].title}
            </h1>

            <p
              className='project-description'>
              {ProjectsList[index].description}
            </p>

            <a
              className='project-url'
              href={ProjectsList[index].url}
              >
              View application
            </a>

            <a
              className='project-github'
              href={ProjectsList[index].github}>
              View code
            </a>
          </section>
        </section>

        <section className='footer-section'>
          <Footer />
        </section>

      </div>
    )
  }
}
