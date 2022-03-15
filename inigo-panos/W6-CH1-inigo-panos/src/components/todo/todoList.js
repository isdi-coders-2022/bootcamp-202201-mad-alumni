import React from "react";
import { connect } from "react-redux";

export const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

export const TodoList = (state) => {
  console.log(state);
  return (
    <div>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};
