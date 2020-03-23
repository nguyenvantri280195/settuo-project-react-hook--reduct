import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as reducers from './reducers';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {theme} from './theme';
import {ThemeProvider} from '@material-ui/core';
import {createBrowserHistory} from 'history';
import {Notification} from './components/Notification';

export const history = createBrowserHistory();
const reducer = combineReducers({
  ...reducers,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

window.__REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__ || {};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App history={history} />
      <Notification />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
