import React from 'react'
import Navbar from './Navbar'
import ListGroup from './ListGroup'
import { useNavigate } from 'react-router-dom'

function AllTodos({ todos, deleteTodo, editTodo }) {

    const navigate = useNavigate()

    const displayedTodos = todos.slice(0, 4);

    const handleClick = () => {
        navigate('/create')
    }

    const handleAll = () => {
        navigate('/all-todo')
    }

    return (
        <div className='first-page' style={{ padding: "40px 0px 40px 0px" }}>
            <Navbar />
            {
                todos.length === 0 ? (
                    <>
                        <h1 style={{ marginTop: "150px", fontSize:"50px",fontWeight:"100",color:"#2d77af" }}>No Data Found</h1>
                        <button className="add" style={{ marginTop: "150px" }} onClick={handleClick}>Add Todo &nbsp;<i className="fa-solid fa-pencil"></i></button>
                    </>
                ) : (
                    <>
                        <ListGroup todos={displayedTodos} deleteTodo={deleteTodo} editTodo={editTodo} />
                        <a onClick={handleAll}>View All</a>
                        <button className="add" onClick={handleClick}>Add Todo &nbsp;<i className="fa-solid fa-pencil"></i></button>
                    </>
                )
            }
        </div>
    )
}

export default AllTodos
