import React from "react";
import TodoItem from "./todoItem";

const List = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo, key) => (
          <TodoItem setTodos={setTodos} key={key} todos={todos} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default List;
