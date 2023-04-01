import React from "react";

const Todo = (props) => {
  return (
    <div className="Todo">
      <p
        className={`${props.task.completed ? "completed" : ""}`}
        onClick={() => props.toogleComplete(props.task.id)}
      >
        {props.task.task}
      </p>
      <div className="editanddelete">
        <button onClick={() => props.editTodo(props.task.id)}>Edit</button>
        <button onClick={() => props.deleteTodo(props.task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
