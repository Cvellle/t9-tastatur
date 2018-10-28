import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'
import {filterNumbers} from '../store/actions'

const Header = props => {

  return (
    <header className="App-header">
      <nav className="nav" >
      <span className="">Switch:</span> 
        <NavLink replace={true} id="home" to="/" onClick={e=>e.target.parentNode.nextElementSibling.style.display="block"}>T9 typing</NavLink>{' '}
        <NavLink to="/Qwerty" id="qwerty" onClick={e=>e.target.parentNode.nextElementSibling.style.display="none"}>Qwerty to T9</NavLink>
      </nav>
      <div>
        Show a specific number: 
        <input className="search" onChange={e => props.filterNumbers(e.target.value)}/>
      </div>
   
    </header>
  )
}

const mapDispatchToProps = { filterNumbers }

export default connect(null, mapDispatchToProps)(Header)