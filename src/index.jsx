import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import reduxPromise from "redux-promise";

import App from "./components/app";
import "../assets/stylesheets/application.scss";

import messagesReducer from "./reducers/messages_reducer.js";
import identityReducer from "./reducers/identity_reducer.js";

const initialState = {
  messages: [
    {
      "author":"Shirley",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"Joyce",
      "content":"My name is Joyce",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ]
  // ],
  // channels: ["general", "london", "batch-103"],
  // currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  // selectedChannel: "general"
};

const reducers = combineReducers({
  messages: messagesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
