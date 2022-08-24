import React from 'react';
import { render } from 'react-dom';
import "./styles.css";



const classNames = {                  // constants for css style application
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let id = 0

const Todo = props => (
  <li class={classNames.TODO_ITEM}>
    <input type="checkbox" class={classNames.TODO_CHECKBOX} checked={props.todo.checked} onChange={props.onToggle} />
    <button class={classNames.TODO_DELETE} onClick={props.onDelete}>delete</button>
    <span class={classNames.TODO_TEXT}>{props.todo.text}</span>
  </li>
)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    const text = prompt("TODO text please!")
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id++, text: text, checked: false},
      ], 
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render() {
    return (
      <div>
          <div class="container center">
            <h1 class="center title">My TODO App</h1>
            <div class="flow-right controls">
              <span>Item count: <span id="item-count">{this.state.todos.length}</span></span>
              <span>Uncompleted count: <span id="unchecked-count">{this.state.todos.filter(todo => !todo.checked).length}</span></span>
            </div>
            <button id="myBtn" class="button center" onClick={() => this.addTodo()}>New TODO</button>
            <ul id="todo-list">
              {this.state.todos.map(todo => (
                <Todo
                  onToggle={() => this.toggleTodo(todo.id)}
                  onDelete={() => this.removeTodo(todo.id)}
                  todo={todo}
                />
              ))}
            </ul>
            </div>
        </div>
    )
  }
}

