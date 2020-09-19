import React from "react";

const TodoItem = ({ title, done, index, toggleDone }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggleDone(index)}
        />
        &nbsp;
        {done ? <strike>{title}</strike> : <span>{title}</span>}
      </label>
    </li>
  );
};

export default TodoItem;
