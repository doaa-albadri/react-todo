import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import List from "./components/list";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todosStatus, setTodosStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [allColor, setAllColor] = useState("#d2baf7");
  const [completedColor, setCompletedColor] = useState("rgb(124, 123, 123)");
  const [uncompletedColor, setUncompletedColor] =
    useState("rgb(124, 123, 123)");

  useEffect(() => {
    filterTodosHandler();
  }, [todos, todosStatus]);

  const filterTodosHandler = () => {
    switch (todosStatus) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const filterAll = (e) => {
    e.preventDefault();
    setFilteredTodos(todos.filter((todo) => todo.completed === true));
    setAllColor("#d2baf7");
    setCompletedColor("rgb(124, 123, 123)");
    setUncompletedColor("rgb(124, 123, 123)");
  };

  const filterCompleted = (e) => {
    e.preventDefault();
    setFilteredTodos(todos.filter((todo) => todo.completed === false));
    setCompletedColor("#d2baf7");
    setAllColor("rgb(124, 123, 123)");
    setUncompletedColor("rgb(124, 123, 123)");
  };

  const filterUncompleted = (e) => {
    e.preventDefault();
    setFilteredTodos(todos);
    setUncompletedColor("#d2baf7");
    setAllColor("rgb(124, 123, 123)");
    setCompletedColor("rgb(124, 123, 123)");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <Form
            inputText={inputText}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            setTodosStatus={setTodosStatus}
            filterCompleted={filterCompleted}
            filterUncompleted={filterUncompleted}
            filterAll={filterAll}
            allColor={allColor}
            completedColor={completedColor}
            uncompletedColor={uncompletedColor}
          />
          <List
            todos={todos}
            filteredTodos={filteredTodos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
