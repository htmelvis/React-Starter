import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
require('./app-style/style.styl');

import routes from './routes';
import reducers from './reducers';

const middleware = routerMiddleware(browserHistory);

const store = createStore(
  combineReducers({
    reducers,
    routing: routerReducer
  }, applyMiddleware(middleware))
)
const history = syncHistoryWithStore(browserHistory, store);

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
<Provider store={store}>
  <Router history={history} routes={routes} />
  </Provider>
  , document.querySelector('.container'));