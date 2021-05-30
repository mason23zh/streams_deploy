import React from "react";
import ReactDom from "react-dom";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
import App from "./components/App";

import "semantic-ui-css/semantic.min.css";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
