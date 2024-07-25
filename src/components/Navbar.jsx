import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <span onClick={handleClick} className='data'>
            <h3>TODO</h3>
            <h3 className='list'>&nbsp;LIST</h3>
        </span>
    )
}

export default Navbar
