import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo, index }) => {
  return (
    <div
      className="todo"
      style={todo.isCompleted ? { textDecoration: "line-through" } : null}
    >
      {todo.text}
      <button onClick={() => console.log("h")}>Complete</button>
      <button onClick={() => console.log("h")}>Delete</button>
    </div>
  );
};

const App = props => {
  const [todoList, setTodoList] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Understand the Logic",
      isCompleted: false
    },
    {
      text: "Be the best",
      isCompleted: false
    }
  ]);
  return (
    <div className="App">
      <div>
        {todoList.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
