import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './scss/styles.scss';

render(
      <App />,
    document.getElementById('root')
  );