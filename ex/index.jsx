import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import Field from "./field";
import fieldRedurcer from "./fieldRedurcer";

const reducers = combineReducers({
  field: fieldRedurcer,
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field initialValue="Teste" />
  </Provider>,
  document.getElementById("app")
);
