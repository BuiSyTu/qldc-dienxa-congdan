import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/style.react.scss'

import App from './App';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './setup/redux/Store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router basename='/public'>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

