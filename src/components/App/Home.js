import React, { Component } from 'react'
import { Link } from 'react-router'
import { map } from 'lodash'
import { TweenLite, Linear } from 'gsap'
import Masonry from 'react-masonry-component'

import './style.css'


var masonryOptions = {
  transitionDuration: 1
}

export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      recent: [
        {url: 'https://the-unreasonable-challenge.firebaseapp.com/',
          src: './images/the-unreasonable-challenge.png',
          title: 'The Unreasonable Challenge',
          description:'An application used to write about and complete challenges between users, built with React, JavaScript, Create-React-App, Firebase and CSS. Users can log in, add images and challenges, count the times each challenge is completed, and comment on others challenges. Feel free to log in and add a challenge!',
          github:'https://github.com/hilarylewis92/the-unreasonable-challenge'},

        {url: 'https://hilarylewis92.github.io/weather-forecast/#/?_k=myzv4x',
          src: './images/weather-dux.png',
          title: 'Weather Dux',
          description: 'This weather application was built using React, React-Router, and Redux and tested with Jest and Enzyme. The application retrieves and displays forecast data from Weather Underground API, uses the Geolocation to determine the weather in your current location, and saves favorite cities to display their forecasts. For each city, the user can display current forecast, ten day forecast, hourly forecast for each day, and delete any pinned cities.',
          github: 'https://github.com/hilarylewis92/weather-forecast'},

        {url: 'https://nimblenetwork-d13c3.firebaseapp.com/',
          src: './images/nimble-network.png',
          title: 'Nimble Network',
          description: 'An app to keep track of contacts related to people you network with in an industry. Upon signing in through google using Firebase, the user is able to record name, company, email, social media, and phone number of new contacts. The user can also add an image to each contact saved. There is a toggle on/off “followup” indicator on each contact, which will save those contacts in a “followup” list for quick reference. The application permits multiple options for email, phone, and social media, and allows the user to specify “primary” where applicable. Finally, it includes an option note field for each contact, so that the user can write little reminders.',
          github: 'https://github.com/hilarylewis92/nimble-network'},
      ],
      currentIndex: 0,
    }
  }

  componentDidMount() {
    this.gsapHeroAnimation()
  }

  gsapHeroAnimation() {
    TweenLite.to('.hero-text-landing', 1.5,
    {top:180, opacity:1, lazy:true}
    )
    TweenLite.to('.recent-projects-section', 1.5,
    {opacity:1, delay:1, ease:Linear.easeNone}
    )
  }

  clickPrev(i) {
    const { recent } = this.state
    let newIndex

    i > 0
      ? newIndex = i - 1
      : newIndex = 0

    const project = recent[newIndex]

    this.setState ({
      currentIndex: newIndex,
    })
  }

  clickNext(i) {
    const { recent } = this.state
    let newIndex

    i < recent.length - 1
      ? newIndex = i + 1
      : newIndex = i

    const project = recent[newIndex]

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
    const { recent, currentIndex } = this.state

    var currentProject = recent[currentIndex]

    return (
      <div className='Home'>
        <section className='hero-background-image'>

          <section className='hero-text-landing'>
            <span> Hilary Lewis.</span>
            <br />
            <span> Mathematical.</span>
            <span> Creative.</span>
            <br />
            <span> Teacher.</span>
            <span> Learner.</span>
            <br />
            <span className='front-end'> Front End Developer.</span>
            <br />
            <span> Denver, Colorado.</span>
          </section>
        </section>
      </div>
    );
  }
}



// <section className='recent-projects-section' id='projects'>
//   <h3 className='recent-projects-title'>
//     Most Recent Projects
//   </h3>


// <section className='recent-projects-list'>
//
//   <Masonry
//     className={'projects-list'}
//     elementType={'ul'}
//     options={masonryOptions}
//     disableImagesLoaded={false}
//     updateOnEachImageLoad={false}>
//
//     {recent.map((project, i) => {
//       return(
//         <li
//           className='single-project'
//           key={i}
//           onClick={() => this.grabProject(i)}>
//
//           <img
//             className='project-image'
//             src={require(project.src)}
//             role='none'
//             />
//
//         </li>
//       )
//     })}
//   </Masonry>
// </section>

// <section className='view-more-section'>
//
//   <Link
//     to='/projects'
//     className='view-more-projects button'>
//     View More Projects &rarr;
//   </Link>
//
// </section>

// </section>
