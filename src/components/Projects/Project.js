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
      <div className='individual-project'>
        <div className="header">
          <Header />
        </div>

        <h1>
          {ProjectsList[index].title}
        </h1>

        <img
          className='project-image'
          src={require(ProjectsList[index].src)}
          role='none'
        />

        <p>
          {ProjectsList[index].description}
        </p>

        <a
          href={ProjectsList[index].url}
          >
          {ProjectsList[index].url}
        </a>

        <a
          href={ProjectsList[index].github}>
          {ProjectsList[index].github}
        </a>

        <section className='footer-section'>
          <Footer />
        </section>

      </div>
    )
  }
}
