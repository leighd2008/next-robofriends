import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';

import App from '../containers/App';
import registerServiceWorker from '../registerServiceWorker';
import { requestRobots, searchRobots } from '../reducers'

import './index.css';

const logger = createLogger()

const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

const Index = () => (
  <div>
    <Provider store={store}>
      <App />
    </Provider>,
  </div>
);
registerServiceWorker();

export default Index;