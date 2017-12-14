import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore,applyMiddleware,compose } from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import rootReducer from './reducers/index';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(thunk,logger)

// const config = {
//   key:'root',
//   storage
// }
//
// let reducer = persistReducer(config,rootReducer);


const store = createStore(
  rootReducer,
  composeEnhancers(
    middleware
  )
);

export default store;
