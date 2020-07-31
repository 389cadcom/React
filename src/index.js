import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore'

//全局挂载
React.Component.prototype.log = obj => console.log(JSON.stringify(obj, null, 2))

const store = configureStore()

// 通过Provider 注入store
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
