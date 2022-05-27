import { combineReducers } from "redux";
const todoReducer = (state = [], action) => {
  if (action.type === 'ADD_TODO') {
    return [...state, action.payload];
  }
  if (action.type === 'DELETE_TODO') {
    return state.filter((item, index) => index !== action.payload);
  }

  return state;
};
const authReducer=(state={isLogged:false},action)=>{
  if(action.payload){
  let user=localStorage.getItem('users');
  const userList=JSON.parse(user) || [];
  const validUser=userList?.find(m=>m.email===action.payload.userName && m.password===action.payload.password);
  const existingUser=userList?.find(m=>m.email===action.payload.email);
  switch (action.type) {
    case 'LOGIN':
      if (validUser) {
        state={...state,isLogged:true}
      }
      break;
    case 'SIGN_UP':
      if (!existingUser) {
        let userData=JSON.stringify(userList?userList.push(action.payload):[action.payload]);
        localStorage.setItem('users',userData);
      }
      break;
    default:
      break;
  }
}

  return state;  

}
const rootReducer = combineReducers({
    todo : todoReducer,
    auth : authReducer
})
export default rootReducer;
