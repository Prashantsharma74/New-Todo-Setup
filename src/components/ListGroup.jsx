import React from 'react'
import ListItem from './ListItem'

function ListGroup({ todos, deleteTodo, editTodo }) {

    return (
        <ul className='list-group'>
            {
                todos.map(todo => <ListItem key={todo.id} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo}/>)
            }
        </ul>
    )
}

export default ListGroup
