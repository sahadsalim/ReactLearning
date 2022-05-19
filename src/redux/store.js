import rootReducer from "./reducer";

const { createStore, combineReducers } = require("redux");
const store = createStore(rootReducer);
export default store;
