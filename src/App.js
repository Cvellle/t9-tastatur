import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import { setLoading, setFiltered } from './store/actions'
import Header from './components/Header'
import MainScreen from './components/MainScreen'
import Qwerty from './components/Qwerty'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.setLoading(true)
    fetch('data/numbers.json')
      .then(data => data.json())
      .then(data => {
        this.props.setLoading(false)
        this.props.setFiltered(data)
      })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={MainScreen} />
            <Route path="/Qwerty" component={Qwerty} />
          </div>
        </Router>
        <div className="main">
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { setLoading, setFiltered }
export default connect(null, mapDispatchToProps)(App)
