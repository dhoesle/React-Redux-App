import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { appReducer } from './reducers'
import { Provider } from 'react-redux'

import './App.css';
import Quote from './components/Quote'


const logger = ({ getState }) => next => action => {
  console.log('dispatching action', action)
  next(action);
}

let store = createStore(appReducer, applyMiddleware(logger, thunk))

function App() {
  return (
    <div className="App">
      <h1>Kanye West Quote Generator</h1>
      <Quote />
      
    </div>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement

);

