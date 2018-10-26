import React, { Component } from 'react'
import {connect} from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import {setLoading, setNumbers, setFiltered} from './store/actions'
import Header from './components/Header'
import MainScreen from './components/MainScreen'
import About from './components/About'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.setLoading(true)
    fetch('https://api.myjson.com/bins/jnipm')
    .then(data => data.json())
    .then(data => {
      this.props.setLoading(false)
      this.props.setNumbers(data)
      this.props.setFiltered(data)
    })
  }

  clear() {
    document.querySelector('#result').value = "";
    document.querySelector('#inp').value = "";
  }

  combine(e) {
    e.stopPropagation();
    const all = document.querySelector('#inp').value;
    document.querySelector('#result').value = `${all[0]}${all[3]}, ${all[0]}${all[4]}, ${all[0]}${all[5]}, ${all[1]}${all[3]}, ${all[1]}${all[4]}, ${all[1]}${all[5]}, ${all[2]}${all[3]}, ${all[2]}${all[4]}, ${all[2]}${all[5]}`;
    
    if (document.querySelector('#inp').value.length == 7 ) {

      if (document.querySelector('#inp').value[0] !== "p" ||	document.querySelector('#inp').value[0] !== "q") {
         document.querySelector('#result').value = `${all[0]}${all[3]}, ${all[0]}${all[4]}, ${all[0]}${all[5]}, ${all[0]}${all[6]}, ${all[1]}${all[3]}, ${all[1]}${all[4]}, ${all[1]}${all[5]}, ${all[1]}${all[6]}, ${all[2]}${all[3]}, ${all[2]}${all[4]}, ${all[2]}${all[5]}, ${all[2]}${all[6]}`;
        }

      if (document.querySelector('#inp').value[0] == "p" ||	document.querySelector('#inp').value[0] == "q") {
         document.querySelector('#result').value = `${all[0]}${all[4]}, ${all[0]}${all[5]}, ${all[0]}${all[6]}, ${all[1]}${all[4]}, ${all[1]}${all[5]}, ${all[1]}${all[6]}, ${all[2]}${all[4]}, ${all[2]}${all[5]}, ${all[2]}${all[6]}, ${all[3]}${all[4]}, ${all[3]}${all[5]}, ${all[3]}${all[6]}`;
        }
    }

    if (document.querySelector('#inp').value.length == 8 ) {
       document.querySelector('#result').value = `${all[0]}${all[4]}, ${all[0]}${all[5]}, ${all[0]}${all[6]}, ${all[0]}${all[7]}, ${all[1]}${all[4]}, ${all[1]}${all[5]}, ${all[1]}${all[6]}, ${all[1]}${all[7]}, ${all[2]}${all[4]}, ${all[2]}${all[5]}, ${all[2]}${all[6]}, ${all[2]}${all[7]}, ${all[3]}${all[4]}, ${all[3]}${all[5]}, ${all[3]}${all[6]}, ${all[3]}${all[7]}`;  
    }

    if (document.querySelector('#inp').value.length == 3 ) {
      document.querySelector('#result').value = `${all[0]}, ${all[1]}, ${all[2]}`;  
    }

    if (document.querySelector('#inp').value.length == 4 ) {
      document.querySelector('#result').value = `${all[0]}, ${all[1]}, ${all[2]}, ${all[2]}`;  
    }

    if (document.querySelector('#inp').value.length > 8 ) {
      document.querySelector('#result').value = ""  
    }

    document.querySelector('#inp').value = "";
    
}


  render() {
    return (
      <div className="App">
        <Router>
        <div>
            <Header />     
            <Route exact path="/" component={MainScreen} />
            <Route path="/about" component={About} />
             </div>
        </Router>
        <div className="main">
        <p className="descr">Click on two numbers to get their T9 combination.</p>
            <input id="inp" onChange={this.combine} readonly="true"/>
            <button  id="comb" onClick={this.combine}>Combine</button>
            <input id="result" readonly="true"/><br/>
            <button  id="clear" onClick={this.clear}>Clear</button>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = {setLoading, setNumbers, setFiltered}

export default connect(null, mapDispatchToProps)(App)