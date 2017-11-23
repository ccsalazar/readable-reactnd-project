import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore,applyMiddleware,compose } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = applyMiddleware(thunk,logger)

const store = createStore(
  rootReducer,
  composeEnhancers(
    middleware
  )
);


console.log('GET STATE:',store.getState());

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>,
document.getElementById('root'));
registerServiceWorker();
