import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./Index.css";
import App from "./App";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';


const persistedReducer = persistReducer({key: 'persist-key', storage}, allReducers);
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
      <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
