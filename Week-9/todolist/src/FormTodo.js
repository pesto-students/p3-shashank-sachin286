import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const FormTodo = ({ addTodo }) => {
    const [value, setValue] = useState("");
  
    const handleSubmit = (ele) => {
      ele.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div>
            <b>Add Todo</b>
          </div>
          <input
            type="text"
            className="form-control"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add new todo"
          />
        </div>
        <button className="button blue" type="submit">
          Submit
        </button>
      </form>
    );
  }

  export default FormTodo;