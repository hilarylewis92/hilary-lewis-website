import React, { Component } from 'react';
import Masonry from 'react-masonry-component'

import './style.css';
import Header from '../Header'
import ProjectModal from './ProjectModal'
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
        {url: 'https://hilarylewis92.github.io/weather-forecast/#/?_k=myzv4x',
          src: './images/weather-dux.png',
          title: 'Weather Dux'},
        {url: 'https://nimblenetwork-d13c3.firebaseapp.com/',
          src: './images/nimble-network.png',
          title: 'Nimble Network'},
        {url: 'https://github.com/hilarylewis92/number-guesser-react',
          src: './images/number-guesser-react.jpg',
          title: 'Number Guesser'},
        {url: 'https://shoot-the-breeze-1be68.firebaseapp.com/',
          src: './images/shoot-the-breeze.png',
          title: 'Shoot the Breeze'},
        {url: 'https://hilarylewis92.github.io/2DoBox-Pivot/',
          src: './images/2-do-box.png',
          title: '2 Do Box'},
        {url: 'https://hilarylewis92.github.io/gametime/',
          src: './images/game-time.png',
          title: 'Pumpkin Smasher'},
      ],
      currentIndex: 0,
    }
  }

  clickPrev(i) {
    const { projects } = this.state
    let newIndex

    i > 0
      ? newIndex = i - 1
      : newIndex = 0

    const project = projects[newIndex]

    this.setState ({
      currentIndex: newIndex,
    })
  }

  clickNext(i) {
    const { projects } = this.state
    let newIndex

    i < projects.length - 1
      ? newIndex = i + 1
      : newIndex = i

    const project = projects[newIndex]

    this.setState ({
      currentIndex: newIndex,
    })
  }

  grabProject (i) {
    this.setState ({
      currentIndex: i
    })
    this.refs.modal.showModal()
  }

  render() {
    const { projects, currentIndex } = this.state

    var currentProject = projects[currentIndex]

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

            {projects.map((project, i) => {
              return(
                <li
                  className='single-project'
                  key={i}
                  onClick={() => this.grabProject(i)}>

                  <img
                    className='project-image'
                    src={require(project.src)}
                    role='none'
                  />
                </li>
              )
            })}
          </Masonry>
        </section>

        <ProjectModal
          ref='modal'
          project={currentProject || {}}
          i={currentIndex}
          clickNext={this.clickNext.bind(this)}
          clickPrev={this.clickPrev.bind(this)}
        />

        <section className='footer-section'>
          <Footer />
        </section>
      </div>
    );
  }
}
