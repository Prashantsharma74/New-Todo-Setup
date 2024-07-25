import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function ListItem({ todo, deleteTodo, editTodo }) {

    const { title, description } = todo

    const navigate = useNavigate()

    const handleClick = () => {
        editTodo(todo)
        navigate('/create')
    }

    const handleDelete = () => {
        deleteTodo(todo.id)
        toast.error('Todo Deleted!!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    }

    return (
        <li>
            <p>&#9989;</p>
            <span className='detail'>
                <h2>{title}</h2>
                <p>{description}</p>
            </span>
            <button onClick={handleClick} >VIEW</button>
            <button onClick={handleDelete} className='delete' style={{ marginLeft: "20px" }}>Delete</button>
        </li>
    )
}

export default ListItem
