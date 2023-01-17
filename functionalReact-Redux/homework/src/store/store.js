import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './index.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,

}

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)));


export const persistor = persistStore(store);


