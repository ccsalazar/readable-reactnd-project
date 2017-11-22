import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import {Provider} from 'react-redux';


const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>,
document.getElementById('root'));
registerServiceWorker();
