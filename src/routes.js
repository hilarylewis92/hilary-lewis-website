import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/About/resume';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/about" component={About} />
        <Match exactly pattern="/about/resume" component={Resume} />
        <Match exactly pattern="/projects" component={Projects} />
        <Match exactly pattern="/contact" component={Contact} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

const NotFound = ({location}) => {
  <div>Nothing matched {location.pathname}.</div>
}

export default Routes;
