
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

export {addtodoitem,deltodoitem};
