import React, { Component } from 'react'

export default class Project extends Component {

  onCheckedSubmit(e) {
    const { i } = this.props
    e.preventDefault()
    this.props.addCount(i)
  }

  clickPrevFun () {
    const { i, project } = this.props
    this.props.clickPrev(i, project)
  }

  clickNextFun () {
    const { i, project } = this.props
    this.props.clickNext(i, project)
  }

  render() {
    const { project } = this.props.params
    console.log(this.props.params);
    return (
      <div
        hidden='true'>

        <div className='arrow-container'>

          <button
            className='arrows left-arrow'
            onClick={(e) => this.clickPrevFun(e)}
          > {'<'}
          </button>

          <button
            className='arrows right-arrow'
            onClick={(e) => this.clickNextFun(e)}
          > {'>'}
          </button>

        </div>

        <a
          href={project.url}
          target='_blank'>
          <img
            className='project-modal-image'
            src={require(project.src)}
            role='none'
          />
        </a>

        <h3
          className='project-title'>
          {project.title}
        </h3>

        <p
          className='projects-description'>
          {project.description}
        </p>
        <br />
        <a
          href={project.url}
          target='_blank'>
          View application
        </a>
        <br />
        <a
          className='project-github'
          href={project.github}
          target='_blank'>
          View code
        </a>
      </div>
    )
  }
}
