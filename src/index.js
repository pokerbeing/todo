import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


function newTodo() {
  // get text
  // create li
  // create input checkbox
  // create button
  // create span
  // update counts
}

function deleteTodo() {
  // find the todo to delete
  // delete
  // update the counts
}

function updateCounts(action) {
  // if action == delete
  //  was item uncompleted?
  //      if so, decrement uncompleted
  //  if not, decrement item 
  // else if action == add
  //    increment item and uncompleted counts  
}

root.render(
  <StrictMode>
    <App />
    <li>
    <input type="checkbox" />
    <button>delete</button>
    <span>text</span>
    </li>

  </StrictMode>
);
