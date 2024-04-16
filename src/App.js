import { faSquareCheck, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Button from './components/Button';
import TodoHeader from './components/TodoHeader';
import TodoItem from './components/TodoItem';
import './style.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddTodo from './components/AddTodo';

function App() {

  const Status = Object.freeze({
    TODO: 0,
    IN_PROGRESS: 1,
    DONE: 2,
  })

  const todoList = {
    1 : {
      title: "Wake Up",
      status: Status.DONE,
    },
    2 : {
      title: "Exercise",
      status: Status.DONE,
    },
    3 : {
      title: "Breakfast",
      status: Status.IN_PROGRESS,
    },
    4 : {
      title: "Go to Office",
      status: Status.TODO,
    },
    5 : {
      title: "Lunch",
      status: Status.TODO,
    }
  }

  const [isAddTodoEnabled, setIsAddTodoEnabled] = useState(false);

  const handleAddTodoItem = () => {
    setIsAddTodoEnabled(true);
  }

  const saveTodo = (todoTitle) => {
    const newTodo = {
      title: todoTitle,
      status: Status.TODO,
    }
    todoList[6] = newTodo;
    console.log(todoList);
  }

  return (
    <>
      <div className='container'>
        <TodoHeader text="Todo App"></TodoHeader>
        {Object.entries(todoList).map(([id, todo]) => (
          <TodoItem status={todo.status} title={todo.title}></TodoItem>
        ))}
        <AddTodo isAddTodoEnabled={isAddTodoEnabled} handleSaveTodo={saveTodo}></AddTodo>
        <button className="todo-button" onClick={handleAddTodoItem}>Add Item</button>
      </div>
   </>
  );
}

export default App;
