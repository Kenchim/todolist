import React from 'react';
import ElementTodo from './components/ElementTodo';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items: [],
      term:'',
    }
  }

handleChange = (event) => {
  const newTerm = { term　: event.target.value };
  this.setState(newTerm);
}

onSubmit = (event) => {
  event.preventDefault();
  const newTerm = { id : Date.now(), content : this.state.term }
  if(newTerm.content !== ''){
  this.setState({ items : [...this.state.items, newTerm], term:''});
}
}

handleDelete = id => {
  this.setState({
    items: this.state.items.filter(item => item.id !==　id)
  })
}



render(){
  return (
      <div className="wrap">
        <h1>--- Todo List ---</h1>
          <div>
              <AddTodo value={this.state.term} onChange={this.handleChange} onSubmit={this.onSubmit} />
            <ul className="list">
              {this.state.items.map((item) => (
                <ElementTodo
                  key={item.id}
                  content={item.content}
                  onDelete={() => this.handleDelete(item.id)}
                />
              ))}
            </ul>
          </div>
      </div>
    );
  }
}
export default App;


//inputした要素をsubmitして、ElementTodoに渡す。
