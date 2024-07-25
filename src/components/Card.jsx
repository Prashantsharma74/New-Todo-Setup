import React from 'react'
import { useNavigate } from 'react-router-dom'

function card({ todo, editTodo }) {

    const navigate = useNavigate()

    const handleClick = () => {
        editTodo(todo)
        navigate("/create")
    }

    return (
        <div className='alltodos'>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <button onClick={handleClick}>VIEW</button>
        </div>
    )
}

export default card
