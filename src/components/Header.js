import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = props => {
  return (
    <header className="App-header">
      <nav className="nav" >
        <span className="">Switch:</span>
        <NavLink replace={true} id="home" to="/" >T9 typing</NavLink>{' '}
        <NavLink to="/Qwerty" id="qwerty" >Qwerty to T9</NavLink>
      </nav>
      <div>
      </div>
    </header>
  )
}

export default Header