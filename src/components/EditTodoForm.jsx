import React, { useState } from "react";

const EditTodoForm = (props) => {
  const [enteredTask, setEnteredTask] = useState(props.task.task);

  const changeHandler = (e) => {
    setEnteredTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.editTodo(enteredTask, props.task.id);
  };
  return (
    <form className="TodoForm" onSubmit={submitHandler}>
      <input
        type="text"
        className="todo-input"
        value={enteredTask}
        onChange={changeHandler}
        placeholder="Update task?"
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
