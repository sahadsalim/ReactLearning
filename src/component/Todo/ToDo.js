import React, { useState } from "react";
import ToDoItem from './ToDoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addtodoitem } from '../../redux/actions';

const ToDo = () => {
  const list = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [toDo, setToDo] = useState("");
  let inputItem = React.createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addtodoitem({
        text: toDo,
        checked: false,
      }),
    );
    setToDo('');
    inputItem.current.value = "";
  }
  let display = list.map(
    (item, index) => {
      return (<ToDoItem item={item} key={index} index={index} />)
    });
  return (
    <div className="flex-1">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="todo_text text-lg" onChange={(e) => {
          setToDo(e.target.value);
        }} placeholder="Enter Items..." ref={inputItem} />

        <button className="h-10 px-6 font-semibold rounded-md  text-white  bg-gray-800" type="submit">Add</button>
      </form>
      <hr />
      <ul className="m-2">
        {display}
      </ul>
    </div>
  );
}
export default ToDo;
