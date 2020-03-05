import React from 'react';
import App from '../App';

class ElementTodo extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
  return (
        <li className="todolist">
          <div className="content">{this.props.content}</div>
          <button className="delete" onClick={this.props.onDelete} >delete</button>
        </li>
    );
  }
}
export default ElementTodo;
