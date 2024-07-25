import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Form({ saveTodo, edit, updateTodo }) {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (edit.isEdit) {
            updateTodo(edit.todo.id, title, desc)
            toast.success('Todo Updated!!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
                });
        } else {
            saveTodo(title, desc)
            toast.success('Todo Added!!!', {
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
        setTitle("")
        setDesc("")
        navigate("/")
    }

    useEffect(() => {
        setTitle(edit.todo.title);
        setDesc(edit.todo.description);
    }, [edit])

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">TITLE</label>
            <input type="text" required placeholder='Enter Title here...' value={title} onChange={(e) => setTitle(e.target.value)} />
            <label className='desc' htmlFor="description">DESCRIPTION</label>
            <textarea required placeholder='Enter Description here...' rows="4" cols="50" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
            <button onClick={handleSubmit} className='update'>Save</button>
        </form>
    )
}

export default Form
