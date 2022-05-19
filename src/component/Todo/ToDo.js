import React, { useState } from "react";
import ToDoItem from './ToDoItem';
import { useSelector, useDispatch } from 'react-redux';
import { addtodoitem, deltodoitem } from '../../redux/actions';

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
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="todo_text" onChange={(e) => {
          setToDo(e.target.value);
        }} placeholder="Enter Items..." ref={inputItem} />

        <button className="btn-Add">Add</button>
      </form>
      <hr />
      {display}
    </div>
  );
}
export default ToDo;
