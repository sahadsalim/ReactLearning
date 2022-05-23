
const addtodoitem = (item) => {
    return{
    type: "ADD_TODO",
    payload : item,
    };
};

const deltodoitem = (id) => {
    return{
    type: "DELETE_TODO",
    payload : id,
    };
};

const login=(item)=>{
    return{
    type: "LOGIN",
    payload : item,
    };
};
const signup=(item)=>{
    return{
    type: "SIGN_UP",
    payload : item,
    };
};

export {addtodoitem,deltodoitem,login,signup};
