import { createStore } from 'redux'

import reducer from "./Reducers/Index";

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}
