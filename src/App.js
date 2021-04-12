import React, { useState, useEffect } from "react";
import "./style.css";
//import components
import Form from "./components/Form";
import TodoList from "./components/todoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //run onese
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));

    // if (localStorage.getItem("todos") === null) {
    //   // console.log("null roi");
    //   localStorage.setItem("todos", JSON.stringify([]));
    // } else {
    //   localStorage.setItem("todos", JSON.stringify(todos));
    // }

    // localStorage.setItem("todos", JSON.stringify(todos));
    // let todoLocal = localStorage.getItem("todos", JSON.stringify(todos));
    // console.log("chay vao save localtodo");
    // console.log(todoLocal);
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      // console.log("null roi");
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = localStorage.getItem("todos");
      setTodos(JSON.parse(todoLocal));
    }

    // if (localStorage.getItem("todos") === null) {
    //   console.log("null roi");
    //   localStorage.setItem("todos", JSON.stringify([]));
    // } else {
    //   console.log("no vao day ne");
    //   let todoLocal = localStorage.getItem("todos");
    //   console.log(todoLocal);
    // }
  };

  //! test code
  // const testHanldle = () => {
  //   setTodos((gg) => {
  //     console.log(gg);
  //     return todos + 1;
  //   });
  // };
  //!
  return (
    <div className="App">
      {/* <button onClick={testHanldle}>test 1 ti</button> */}
      <header className="App-header">
        <h1>to do list </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
