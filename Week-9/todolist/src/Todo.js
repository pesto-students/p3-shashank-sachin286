import React from "react";
import "./App.css";

const Todo = ({ todo, index, markTodo, removeTodo }) => {
    return (
      <div className="todo">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
          {todo.text}
        </span>
        <div>
          <button
            className="button green"
            type="button"
            onClick={() => markTodo(index)}
          >
            Done
          </button>{" "}
          <button
            className="button red"
            type="button"
            onClick={() => removeTodo(index)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  export default Todo;