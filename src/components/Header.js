import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom'
import {filterNumbers} from '../store/actions'

const Header = props => {

  return (
    <header className="App-header">
      <nav className="nav" >
        <NavLink replace={true} to="/">Home</NavLink>{' '}
        <NavLink to="/about">About</NavLink>
      </nav>
      Show a specific number: 
      <input className="search" onChange={e => props.filterNumbers(e.target.value)} />
    </header>
  )
}

const mapDispatchToProps = { filterNumbers }

export default connect(null, mapDispatchToProps)(Header)