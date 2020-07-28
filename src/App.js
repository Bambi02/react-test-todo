import React, { Component } from 'react';
import Todos from './Todos';
import Form from './Form';

class App extends Component {
  state = {
    todos:[
      { id:1, content: 'obed so šéfom' },
      { id:2, content: 'večera s priatelkou' }
    ]
  }

  deleteTodo = (id) =>{
    const newTodos = this.state.todos.filter((todo) => todo.id !== id );

    this.setState({
      todos: newTodos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();

    const newTodos = [...this.state.todos, todo]

    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Dnešné úlohy</h1>
        <Form addTodo={this.addTodo}/>
        <Todos todos={ this.state.todos } deleteTodo ={ this.deleteTodo } />
      </div>
    );
  }
}

export default App;
