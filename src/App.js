import React from 'react';
import "./styles.css";

const classNames = {                  // constants for css style application
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let id = 0

// Takes the properties from each today and puts them into the form of HTML
// Filling in the todo.text and the checkbox and delete button links
const Todo = props => (  
  <li id={"li-" + props.todo.id} className={classNames.TODO_ITEM} >
    <input type="checkbox" className={classNames.TODO_CHECKBOX} checked={props.todo.checked} onChange={props.onToggle} />
    <button className={classNames.TODO_DELETE} onClick={props.onDelete}>delete</button>
    <span className={classNames.TODO_TEXT}>{props.todo.text}</span>
  </li>
)

// extend the App class and make it the deafault export
export default class App extends React.Component {
  constructor() {
    super()                 // Reference the component parent class
    this.state = {          // Add a state
      todos: [],            // Create an empty list to hold todos 
    }
  }

  // Get input from user, create a todo object and add it to the list of todos
  addTodo() {
    const text = prompt("TODO text please!")
    // Check to see if user actually entered text
    if (text == '' || text == null) return
    this.setState({
      todos: [
        // Get existing todos from list
        ...this.state.todos,
        // Create a new todo object with three properties
        {id: id++, text: text, checked: false},
      ], 
    })
  }

  // Remove todo from todo list by filtering it out
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  // Change the checked property to the opposite of its current value
  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo      // if not this todo, just add it back to list
        return {                            // else change the checked status and add it back to list
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }
  
  // This method renders the webpage
  render() {
    return (
      <div>
          <div className="container center">
            <h1 className="center title">My TODO App</h1>
            <div className="flow-right controls">
              {/* Add two counters */}
              <span>Item count: <span id="item-count">{this.state.todos.length}</span></span>
              <span>Uncompleted count: <span id="unchecked-count">{this.state.todos.filter(todo => !todo.checked).length}</span></span>
            </div>
            {/* Add button for new TODOs */}  
            <button id="myBtn" className="button center" onClick={() => this.addTodo()}>New TODO</button>
            <ul id="todo-list">
            {/* This section creates the TODO list items */}  
            {/* By reading each todo in todo list and applying the HTML specific to the <Todo> */} 
            {/* Adds links for if checkbox or delete button is clcked */} 
              {this.state.todos.map(todo => (
                <Todo
                  onToggle={() => this.toggleTodo(todo.id)}
                  onDelete={() => this.removeTodo(todo.id)}
                  todo={todo} key={todo.id}
                />
              ))}
            </ul>
            </div>
        </div>
    )
  }
}

