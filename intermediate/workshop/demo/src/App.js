import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

function App({ initialTodos }) {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  const updateInput = (e) => {
    setTodoInput(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      title: todoInput,
      done: false,
    };

    setTodoInput("");
    setTodos([...todos, newTodo]);
  };
  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo, i) => (
          <TodoItem key={i} {...todo} index={i} toggleDone={toggleDone} />
        ))}
      </ul>
      <form onSubmit={addTodo}>
        Add ToDo:
        <input type="text" value={todoInput} onChange={updateInput} />
        <button type="submit">Add ToDo</button>
      </form>
    </div>
  );
}

export default App;
