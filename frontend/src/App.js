import { faSquareCheck, faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoItem from './components/TodoItem';
import './style.css';
import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';

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
