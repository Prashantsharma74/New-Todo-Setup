import React from 'react'
import Navbar from './Navbar'
import Card from './Card'

function ViewTodos({todos, editTodo }) {
    return (
        <div className='first-page' style={{ padding: "40px 0px 40px 0px" }}>
            <Navbar />
            <div className='container'>
                {
                    todos.map(todo => <Card key={todo.id} todo={todo} editTodo={editTodo} />)
                }
            </div>
        </div>
    )
}

export default ViewTodos
