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

  const TodoList = {
    1 : {
      title: "Wake Up",
      status: Status.TODO,
    },
    2 : {
      title: "Exercise",
      status: Status.TODO,
    },
    3 : {
      title: "Breakfast",
      status: Status.TODO,
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

  const [todoList, setTodoList] = useState(TodoList);

  const [isAddTodoEnabled, setIsAddTodoEnabled] = useState(false);

  const handleAddTodoItem = () => {
    setIsAddTodoEnabled(true);
  }

  const saveTodo = (todoTitle) => {
    let id;
    if(Object.keys(todoList).length > 0) {
      id = Math.max(...Object.keys(todoList)) + 1;
    } else {
      id = 1;
    }
    const newTodo = {
      title: todoTitle,
      status: Status.TODO,
    }
    setTodoList((prevTodoList) => ({...prevTodoList, [id]: newTodo}))
    setIsAddTodoEnabled(false);
  }

  const discardTodo = () => {
    setIsAddTodoEnabled(false);
  }

  const onDeleteTodo = (id) => {
    const updatedList = {...todoList};
    delete updatedList[id];
    setTodoList(updatedList);
  }

  return (
    <>
      <div className='container'>
        <TodoHeader text="Todo App"></TodoHeader>
        {Object.entries(todoList).map(([id, todo]) => (
          <TodoItem onDeleteTodo={onDeleteTodo} status={todo.status} title={todo.title} id={id}></TodoItem>
        ))}
        <AddTodo isAddTodoEnabled={isAddTodoEnabled} handleSaveTodo={saveTodo}  handleDiscardTodo={discardTodo}></AddTodo>
        <button className="todo-button" onClick={handleAddTodoItem}>Add Item</button>
      </div>
   </>
  );
}

export default App;
