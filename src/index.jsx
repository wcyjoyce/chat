import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";

import App from "./components/app";
import "../assets/stylesheets/application.scss";

import messagesReducer from "./reducers/messages_reducer.js";

const reducers = combineReducers({
  messages: messagesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
