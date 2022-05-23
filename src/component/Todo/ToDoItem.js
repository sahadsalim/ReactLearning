import React, { useState } from "react";
import {  useDispatch } from 'react-redux';
import { deltodoitem } from '../../redux/actions';

const ToDoItem = (props) => {
  const dispatch = useDispatch();
  const { item, index } = props;
  const [state, setState] = useState({ checked: false });
  const handleChecked = () => {
    if (state.checked === false) {
      setState({ checked: true });
    }
    else {
      setState({ checked: false });
    }
  }
  return (
      <li className="flex items-center justify-between">
        <input type="checkbox" onChange={handleChecked} />
        <span className={state.checked ? "checked capitalize" : "capitalize"}>{item.text}</span>
        <button className="rounded-md bg-red-500 p-2" onClick={() => {
              dispatch(deltodoitem(index));
            }}>X</button>
      </li>
  );
}
export default ToDoItem;
