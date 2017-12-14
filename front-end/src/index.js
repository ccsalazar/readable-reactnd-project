import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import createAppStore from './store';

const {persistor,store} = createAppStore();

ReactDOM.render(
<Provider store={store}>
  <PersistGate persistor={persistor}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PersistGate>
</Provider>,
document.getElementById('root'));
registerServiceWorker();
