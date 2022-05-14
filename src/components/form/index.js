import React from "react";

const Form = ({
  setInputText,
  inputText,
  todos,
  setTodos,
  setTodosStatus,
  filterCompleted,
  filterUncompleted,
  filterAll,
  allColor,
  completedColor,
  uncompletedColor,
}) => {
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { inputText: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const filterTodosHandler = (e) => {
    setTodosStatus(e.target.value);
  };
  return (
    <form style={{ display: "block" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "-20px",
          marginTop: "-10px",
          marginBottom: "16px",
        }}
      >
        <button
          style={{ color: allColor }}
          className="filter-btn"
          onClick={filterAll}
        >
          All
        </button>
        <button
          style={{ color: completedColor }}
          className="filter-btn"
          onClick={filterCompleted}
        >
          Completed
        </button>
        <button
          style={{ color: uncompletedColor }}
          className="filter-btn"
          onClick={filterUncompleted}
        >
          Uncompleted
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginRight: "18px",
        }}
      >
        <input
          onChange={inputChangeHandler}
          value={inputText}
          type="text"
          className="todo-input"
        />
        <button
          disabled={inputText === ""}
          onClick={submitHandler}
          className="add-btn"
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
    </form>
  );
};

export default Form;
