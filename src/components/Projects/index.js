import React, { Component } from 'react';
import Masonry from 'react-masonry-component'
import { Link } from 'react-router'
import { TweenLite, Linear } from 'gsap'

import './style.css';
import Header from '../Header'
import Project from './Project'
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
          title: 'The Unreasonable Challenge',
          name: 'the-unreasonable-challenge',
          description:'An application used to write about and complete challenges between users, built with React, JavaScript, Create-React-App, Firebase and CSS. Users can log in, add images and challenges, count the times each challenge is completed, and comment on others challenges. Feel free to log in and add a challenge!',
          github:'https://github.com/hilarylewis92/the-unreasonable-challenge',
          hidden: true
        },

        {url: 'https://hilarylewis92.github.io/weather-forecast/#/?_k=myzv4x',
          src: './images/weather-dux.png',
          title: 'Weather Dux',
          name: 'weather-dux',
          description: 'This weather application was built using React, React-Router, and Redux and tested with Jest and Enzyme. The application retrieves and displays forecast data from Weather Underground API, uses the Geolocation to determine the weather in your current location, and saves favorite cities to display their forecasts. For each city, the user can display current forecast, ten day forecast, hourly forecast for each day, and delete any pinned cities.',
          github: 'https://github.com/hilarylewis92/weather-forecast',
          hidden: true
        },

        {url: 'https://nimblenetwork-d13c3.firebaseapp.com/',
          src: './images/nimble-network.png',
          title: 'Nimble Network',
          name: 'nimble-network',
          description: 'An app to keep track of contacts related to people you network with in an industry. Upon signing in through google using Firebase, the user is able to record name, company, email, social media, and phone number of new contacts. The user can also add an image to each contact saved. There is a toggle on/off “followup” indicator on each contact, which will save those contacts in a “followup” list for quick reference. The application permits multiple options for email, phone, and social media, and allows the user to specify “primary” where applicable. Finally, it includes an option note field for each contact, so that the user can write little reminders.',
          github: 'https://github.com/hilarylewis92/nimble-network',
          hidden: true
        },

        {url: 'https://github.com/hilarylewis92/number-guesser-react',
          src: './images/number-guesser-react.jpg',
          title: 'Number Guesser',
          name: 'number-guesser',
          description: 'A game written in React where the user sets a minimum and maximum, a random number is automatically generated, and the user tries to guess the random number given clues upon each guess. Once the game is won, the application automatically increases and decreases the minimum and maximum by 10.',
          github: 'https://github.com/hilarylewis92/number-guesser-react',
          hidden: true
        },

        {url: 'https://shoot-the-breeze-1be68.firebaseapp.com/',
          src: './images/shoot-the-breeze.png',
          title: 'Shoot the Breeze',
          name: 'shoot-the-breeze',
          description: 'A real time messaging application made with React and Firebase and tested using Enzyme. Upon login with google, the user can submit messages to other users in the chatroom. The input field for each message has a maximum character count of 140 which is displayed next to the input field. The submit and clear buttons are disabled appropriately to maximize user experience. A list of users contributing to the chatroom is listed based on the current messages being displayed. User can filter by user by selecting user from list. User can filter/search for messages. The user can sort in chronological or reverse chronological order. By default, the messages are stored in chronilogical order. Chat messages display time stamp, user, and message.',
          github: 'https://github.com/hilarylewis92/shoot-the-breeze-1',
          hidden: true
        },

        {url: 'https://hilarylewis92.github.io/2DoBox-Pivot/',
          src: './images/2-do-box.png',
          title: '2Do Box',
          name: '2do-box',
          description:'This is a simple to-do list application. The user can enter in tasks, updown or downvote them based on five levels of importance, delete tasks, and more. We used Selenium Webdriver to extensively test this application.',
          github: 'https://github.com/hilarylewis92/2DoBox-Pivot',
          hidden: true
        },
      ],
      currentIndex: 0,
    }
  }

  componentDidMount() {
    this.gsapProjectsAnimation()
  }

  gsapProjectsAnimation() {
    TweenLite.to('.Projects', 1.5,
    {opacity:1, ease:Linear.easeNone}
    )
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
          <h3
            className='projects-title'>
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
                  onClick = {(i) => this.grabProject(i)}>

                  <Link
                    to={`/projects/${project.name}`}
                    >
                    <img
                      className='project-image'
                      src={require(project.src)}
                      role='none'
                    />
                  </Link>
                </li>
              )
            })}
          </Masonry>
        </section>


        <section className='footer-section'>
          <Footer />
        </section>
      </div>
    );
  }
}
