import React, { Component } from 'react'
import { Link } from 'react-router'
import { map } from 'lodash'
import { TweenMax } from 'gsap'
import { Loader } from 'react-loader'

import './style.css'
import Header from '../Header'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'
import Footer from '../Footer'
import Home from './Home'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />

        <Home />

        <Footer />
      </div>
    );
  }
}

// CREATIVE PROBLEM SOLVER.
// Hilary Lewis.
// Front-end web developer in Denver, Colorado.
  // I'm a front-end developer in Denver, Colorado passionate about connecting the art of design with the science of programming.
