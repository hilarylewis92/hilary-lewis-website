import React, { Component } from 'react'
import Loader from 'react-loader'

import './style.css'
import Header from '../Header'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import Footer from '../Footer'
import Home from './Home'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    this.onSuccess()
  }

  onSuccess() {
    this.setState({
      loaded: true
    })
  }

  render() {
    const { loaded } = this.state

    return (
      <div className='App'>
        {loaded ?
          <div>
            <Header />
            <Home />
            <Footer />
          </div>
        :
          <div
            className='loader-section'>
            <img
              className='loader'
              src={require('./images/triangle.svg')}
              />
          </div>
        }
      </div>
    )
  }
}
