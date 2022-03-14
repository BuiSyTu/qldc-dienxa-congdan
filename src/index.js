import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/style.react.scss'

// import App from './App';
import LoginPage from './pages/login/index.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/public'>
      <LoginPage />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

