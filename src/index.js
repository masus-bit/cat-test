import ReactDOM from "react-dom";
import React from "react";
import { App } from "../src/components/app/app.jsx";
import { Provider } from "react-redux";
import { reducer } from "../src/reducer.js";
import { createStore } from "redux";

const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
