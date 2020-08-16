import React from 'react';
import ReactDOM from 'react-dom';

import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux';
import thunkMiddleware from "redux-thunk";
import rootReducer from "./store/index"

import App from './App';

import './styles/index.sass';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

