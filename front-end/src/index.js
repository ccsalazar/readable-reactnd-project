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


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
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
