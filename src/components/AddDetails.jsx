import React, { useState } from 'react'
import Form from './Form'
import Navbar from './Navbar'

function AddDetails({ saveTodo, deleteTodo, edit, updateTodo }) {

    return (
        <>
            <div className='first-page' style={{ padding: "40px 0px 40px 0px" }}>
                <Navbar />
                <Form saveTodo={saveTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} edit={edit} />
            </div>
        </>
    )
}

export default AddDetails
