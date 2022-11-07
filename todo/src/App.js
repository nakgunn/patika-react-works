import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn JavaScript", status: "completed" }]);

  const [maxId, setMaxId] = useState(0);
  
  const [todoForm, setToDoForm] = useState({
    id: null,
    text: "",
    status: "active",
  });
  
  useEffect(() => {
    console.log('component mount edildi');
    setMaxId(getLastId());
  }, []);
  
  useEffect(() => {
    console.log("todos için çalıştı!", todos);
    setMaxId(getLastId());
  }, [todos]);



  const getLastId = () => {
    const idList = [];
    todos.every((item) => idList.push(item.id));
    return Math.max(...idList) + 1;
  };
  

  const onChangeInput = (e) => {
    setToDoForm({ ...todoForm, id: maxId, text: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todoForm]);
  }
 

  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={onSubmit}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              name="text"
              value={todoForm.text}
              onChange={onChangeInput}
              autoFocus
            />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {
              todos.map((item) => (
                <li key={item.id} className={item.status}>
                <div className="view">
                  <input className="toggle"  type="checkbox" />
                  <label> {item.text} </label>
                  <button className="destroy"></button>
                </div>
              </li>  
              ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong> { todos.filter(t => t.status === "active").length } </strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
