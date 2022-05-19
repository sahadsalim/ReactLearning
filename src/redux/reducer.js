import { combineReducers } from "redux";
const todoreducer = (state = [], action) => {
  if (action.type === 'ADD_TODO') {
    console.log(action);
    return [...state, action.payload];
  }
  if (action.type === 'DELETE_TODO') {
    console.log(action);
    return state.filter((item, index) => index !== action.payload);
  }

  return state;
};
const rootReducer = combineReducers({
    todo : todoreducer,
})
export default rootReducer;
