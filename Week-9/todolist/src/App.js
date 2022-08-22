import React, {useState} from "react";
import "./App.css";
import Todo from "./Todo.js";
import FormTodo from "./FormTodo.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sampe todo",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    if (text.trim().length > 0) {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    }
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div>
        <h1>Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <div className="card">
              <div className="card-body">
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
