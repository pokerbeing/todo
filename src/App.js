import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>The ToDo App</h1>
      <div class="flow-right controls">
        <span>Item count: <span id="item-count">0</span></span>
        <span>Uncompleted count: <span id="unchecked-count">0</span></span>
      </div>
      <button id="myBtn" class="button center">New TODO</button>
    </div>
  )
}
