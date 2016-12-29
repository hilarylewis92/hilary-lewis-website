import React from 'react';
import { render } from 'react-dom';

import Routes from './routes';

import './index.css';
import './reset.css'

render(
  <Routes />,
  document.querySelector('#root')
);
