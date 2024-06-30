import { faSquareCheck, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoItem from './components/TodoItem';
import './style.css';
import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from "uuid";

function App() {

  const Status = Object.freeze({
    TODO: 0,
    IN_PROGRESS: 1,
    DONE: 2,
  })

  const [todoList, setTodoList] = useState({});
  const [isAddTodoEnabled, setIsAddTodoEnabled] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/todos/')
    .then(response => response.json())
    .then(data => {
      console.log("Response Data: ", data.data);
      const formattedData = {};
      data.data.forEach(todo => {
        formattedData[todo.id] = {
          title : todo.title,
          status : todo.status,
        };
      })
      setTodoList(formattedData);
    })
    .catch(error => console.error('error fetching todos: ' + error.message));
  }, []);

  const handleAddTodoItem = () => {
    setIsAddTodoEnabled(true);
  }

  const saveTodo = (todoTitle) => {
    const id = uuidv4(); // Generate a unique ID
    const newTodo = {
      id, // Include the ID in the newTodo object
      title: todoTitle,
      status: Status.TODO,
    };
    fetch('http://localhost:3001/todos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then(response => response.json())
      .then(data => {
        setTodoList((prevTodoList) => ({ ...prevTodoList, [data.id]: newTodo }));
        setIsAddTodoEnabled(false);
      })
      .catch(error => console.error('Error adding todo:', error));
  };

  const discardTodo = () => {
    setIsAddTodoEnabled(false);
  }

  const onDeleteTodo = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedList = { ...todoList };
        delete updatedList[id];
        setTodoList(updatedList);
      })
      .catch(error => console.error('Error deleting todo:', error));
  };

  const onUpdateTodo = (id, updatedTodo) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    })
      .then(response => response.json())
      .then(() => {
        setTodoList((prevTodoList) => ({ ...prevTodoList, [id]: updatedTodo }));
      })
      .catch(error => console.error('Error updating todo:', error));
  };

  return (
    <>
      <div className='container'>
        <TodoHeader text="Todo App"></TodoHeader>
        {Object.entries(todoList).map(([id, todo]) => (
          <TodoItem key={id} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo} status={todo.status} title={todo.title} id={id}></TodoItem>
        ))}
        <AddTodo isAddTodoEnabled={isAddTodoEnabled} handleSaveTodo={saveTodo}  handleDiscardTodo={discardTodo}></AddTodo>
        <button className="todo-button" onClick={handleAddTodoItem}>Add Item</button>
      </div>
   </>
  );
}

export default App;
