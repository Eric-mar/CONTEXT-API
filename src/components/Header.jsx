import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Header() {
  return (
    <div>
        <span className='header'>
            REACT CONTEXT API
        </span>
        <ul className='nav' >
            <li className='prod'>
                <Link to='to' >Home page</Link>
                
            </li>
            <li className='prod'>Cart {}</li>
        </ul>
    </div>
  )
}

export default Header