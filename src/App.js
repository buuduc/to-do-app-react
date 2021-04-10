import React, { useState } from "react";
import "./style.css";
//import components
import Form from "./components/Form";
import TodoList from "./components/todoList";
function App() {
  const [inputText, setInputText] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <h1>to do list {inputText}</h1>
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
