import React from 'react';
import App from '../App';

const AddTodo = props => {
  return (
    <div>
      <input type="text" placeholder="new task..." value={props.value} onChange={props.onChange}/>
      <button className="add" type="submit" onClick={props.onSubmit}>add</button>
    </div>
  );
}

export default AddTodo;
