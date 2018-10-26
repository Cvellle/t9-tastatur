import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import './number.css'

class Number extends React.Component {

  paste = e => {
    document.querySelector('#inp').value += e.target.dataset.name;
  }

  render() {

    return (
      <div onClick={this.selecteMe}
      >
        <button  id="add" onClick={this.paste} className="add" data-name={this.props.num.name}>{this.props.num.code}</button>
        <p id="code">{this.props.num.name}</p>
      </div>
    )
  }
}
export default Number
