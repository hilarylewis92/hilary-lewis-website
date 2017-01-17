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
    return (
      <div className='App'>
        <Loader loaded={this.state.loaded}>
          <Header />
          <Home />
          <Footer />
        </Loader>

      </div>
    );
  }
}
