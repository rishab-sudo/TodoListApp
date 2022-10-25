import React,{useState} from 'react';
import './App.css';
import Header from "./Components/Header"
import Form from "./Components/Form"
import TodoList from './Components/TodoList';

function App() {
const [input,setInput]= useState("");
const [todos,setTodos]=useState([]);
const [editTodo,setEditTodo]=useState();


  return (
  <div className="container">
    <div className='app_wrapper'>
     <div>
      <Header/>
     </div>

<div>
  <Form
  input={input}
  setInput={setInput}
  todos={todos}
  setTodos={setTodos}
  editTodo={editTodo}
  setEditTodo={setEditTodo}
  />
</div>
<div>
  <TodoList 
  todos={todos} 
  setTodos={setTodos} 
  setEditTodo={setEditTodo}
  />
</div>

    </div>
  </div>
  );
}

export default App;



   