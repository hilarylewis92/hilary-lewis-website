import React, { Component } from 'react'
import ProjectsList from './ProjectsList.js'

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
        <h1>{ProjectsList[index].title}</h1>
      </div>
    )
  }
}
