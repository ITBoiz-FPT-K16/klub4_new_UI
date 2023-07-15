import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/icons/icons.css'
import './index.css'
import { BrowserRouter as Router, } from 'react-router-dom';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers';

const store  = createStore(rootReducer,composeWithDevTools())
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
        <App />
        <span>
          
        </span>
    </Router>
  </Provider>
);


