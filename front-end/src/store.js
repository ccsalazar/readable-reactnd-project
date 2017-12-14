import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore,applyMiddleware,compose } from 'redux';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = applyMiddleware(thunk,logger)

const config = {
  key: 'root',
  storage
}

const reducer = persistReducer(config,rootReducer);

const configureStore = createStore(
  reducer,
  composeEnhancers(
    middleware
  )
);

const createAppStore = () => {
  let store = configureStore;
  let persistor = persistStore(store)

  return {persistor,store}
}

export default createAppStore;
