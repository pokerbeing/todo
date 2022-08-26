import React from "react";
import "./styles.css";
import Modal from "react-modal";

// Modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const classNames = {
  // constants for css style application
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete"
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

let id = 0;

const Todo = (props) => (
  <li className={classNames.TODO_ITEM}>
    <input
      type="checkbox"
      className={classNames.TODO_CHECKBOX}
      checked={props.todo.checked}
      onChange={props.onToggle}
    />
    <button className={classNames.TODO_DELETE} onClick={props.onDelete}>
      delete
    </button>
    <span className={classNames.TODO_TEXT}>{props.todo.text}</span>
  </li>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      response: "",
      ModalIsOpen: false
    };
  }
  // Get the button that opens the modal
  static btn = document.getElementById("myBtn");
  // Get the modal
  static modal = document.getElementById("myModal");

  openModal() {
    this.setState({
      ModalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      ModalIsOpen: false
    });
  }

  addTodo() {
    // const text = prompt("TODO text please!");
    this.setState({
      todos: [
        ...this.state.todos,
        { id: id++, text: this.state.response, checked: false }
      ]
    });
  }

  updateResponse(event) {
    this.setState({
      response: event.target.value
    });
  }

  getKeyPress(event) {
    if (event.key === "Enter") {
      this.addTodo();
      this.setState({
        response: ""
      });
      this.closeModal(event);
    } else {
      return;
    }
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <div>
        <div className="container center">
          <h1 className="center title">My TODO App</h1>
          <div className="flow-right controls">
            <span>
              Item count: <span id="item-count">{this.state.todos.length}</span>
            </span>
            <span>
              Uncompleted count:{" "}
              <span id="unchecked-count">
                {this.state.todos.filter((todo) => !todo.checked).length}
              </span>
            </span>
          </div>

          <div>
            <button onClick={() => this.openModal()}>Open Modal</button>
            <Modal
              isOpen={this.state.ModalIsOpen}
              onRequestClose={() => this.closeModal()}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button onClick={() => this.closeModal()}>close</button>
              <div>I am a modal</div>
              <form>
                <p>Enter TODO below:</p>
                <input
                  type="text"
                  id="prompt"
                  size="30"
                  onChange={(event) => this.updateResponse(event)}
                  onKeyPress={(event) => this.getKeyPress(event)}
                  value={this.state.response}
                ></input>
                <p>{this.state.ModalIsOpen.toString()}</p>{" "}
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>
          </div>
          <div>
            <ul id="todo-list">
              {this.state.todos.map((todo) => (
                <Todo
                  onToggle={() => this.toggleTodo(todo.id)}
                  onDelete={() => this.removeTodo(todo.id)}
                  todo={todo}
                  key={todo.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
