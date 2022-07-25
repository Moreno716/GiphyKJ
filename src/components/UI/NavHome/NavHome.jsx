import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo/Logo'

export const NavHome = () => {
  return (
    <nav className='nav'>
        <Logo></Logo>
        <div className='nav-button'>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Tenor">Tenor</Link>
            </li>
            <li>
                <Link to="/Giphy">Giphy</Link>
            </li>
            <li>
                <Link to="/ContactUS">ContactUS</Link>
            </li>
            <li>
                <Link to="/RickAndMorty">RickAndMorty</Link>
            </li>
            <li>
                <Link to='/CounterTen'>Counter</Link>
            </li>
            <li>
                <Link to='/ChangeText'>Text</Link>
            </li>
            
        </ul>
            
        </div>
    </nav>
  )
}
