import React, { useState } from "react";
import "./App.css";

const TodoForm = props => {
  const [formValue, setFormValue] = useState("");
  const submitTodoForm = e => {
    e.preventDefault();
  };
  return (
    <form>
      <label htmlFor="newToDo">New ToDo: </label>
      <input
        type="text"
        name="newToDo"
        value={formValue}
        onChange={e => setFormValue(e.target.value)}
      />
    </form>
  );
};

const Todo = ({ todo, index, toggleCompleted, removeTodo }) => {
  return (
    <div
      className="todo"
      style={todo.isCompleted ? { textDecoration: "line-through" } : null}
    >
      {todo.text}
      <button onClick={() => toggleCompleted(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>Remove</button>
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

  const removeTodo = index => {
    const updatedTodoList = todoList.filter((_, idx) => idx !== index);
    setTodoList(updatedTodoList);
    return;
  };

  const toggleCompleted = index => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].isCompleted = !updatedTodoList[index].isCompleted;
    setTodoList(updatedTodoList);
    return;
  };

  return (
    <div className="App">
      <div>
        {todoList.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm />
      </div>
    </div>
  );
};

export default App;
