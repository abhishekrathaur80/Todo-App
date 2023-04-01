import React, { useState } from "react";

const TodoForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const changeHandler = (e) => {
    setEnteredTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.addTodo(enteredTask);
    setEnteredTask("");
  };
  return (
    <form className="TodoForm" onSubmit={submitHandler}>
      <input
        type="text"
        className="todo-input"
        value={enteredTask}
        onChange={changeHandler}
        placeholder="what is task for today ?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
