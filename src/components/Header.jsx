import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import Home from './Home'
import Cart from './Cart'

function Header({cart}) {
  return (
    <div>
        <span className='header'>
            REACT CONTEXT API
        </span>
        <ul className='nav' >
            <li className='prod'>
                <Link to='/' >Home page</Link>
                
            </li>
            <li className='nav'>
                <Link to='/cart'>Cart ({cart.length})</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header