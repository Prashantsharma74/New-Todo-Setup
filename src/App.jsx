import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddDetails from './components/AddDetails'
import AllTodos from './components/AllTodos'
import ViewTodos from './components/ViewTodos'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [todos, setTodo] = useState([])

  const [edit, setEdit] = useState({ todo: {}, isEdit: false })

  const saveTodo = (text, desc) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: text,
      description: desc
    }
    setTodo([newTodo, ...todos])
  }

  const deleteTodo = (id) => {
    setTodo(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (todo) => {
    setEdit({ todo: todo, isEdit: true })
  }

  const updateTodo = (id, newTitle, newDesc) => {
    setTodo(todos.map(item => item.id === id ? { title: newTitle, description: newDesc } : item))
    setEdit({ todo: {}, isEdit: false })
  }

  return (
    <Router>
      <main>
        <div className='main'>
          <Routes>
            <Route path='/' element={<AllTodos todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />} />
            <Route path='/all-todo' element={<ViewTodos todos={todos} editTodo={editTodo} />} />
            <Route path='/create' element={<AddDetails saveTodo={saveTodo} edit={edit} updateTodo={updateTodo} />} />
          </Routes>
        </div>
      </main>
      <ToastContainer />
    </Router>
  )
}

export default App
