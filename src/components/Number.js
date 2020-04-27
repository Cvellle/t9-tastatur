import React from 'react'
import './number.css'
import { connect } from 'react-redux'
import { setOutput } from '../store/actions'

class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      j: 0
    };
    this.paste = this.paste.bind(this);
  }

  moveOut() {
    () => this.state.i = 0;
  }

  paste(e) {
    this.state.i += 1;
    this.state.j += 1;
    this.props.setOutput(["2"]);
    e.stopPropagation();
    let called = false;
    if (this.state.j === 1) {
      called = true;
    }
    if (e.target.dataset.name.length <= 3) {
      if (this.state.i === 1) {
        this.props.setOutput([e.target.dataset.name.charAt(0)]);
      }
      if (this.state.i === 2) {
        this.props.setOutput([e.target.dataset.name.charAt(1)]);
      }
      if (this.state.i === 3) {
        this.state.i = 0;
        this.props.setOutput([e.target.dataset.name.charAt(2)]);
      }
    }
    if (e.target.dataset.name.length > 3) {
      if (this.state.i === 1) {
        this.props.setOutput([e.target.dataset.name.charAt(0)]);
      }
      if (this.state.i === 2) {
        this.props.setOutput([e.target.dataset.name.charAt(1)]);
      }
      if (this.state.i === 3) {
        this.props.setOutput([e.target.dataset.name.charAt(2)]);
      }
      if (this.state.i === 4) {
        this.state.i = 0;
        this.props.setOutput([e.target.dataset.name.charAt(3)]);
      }
    }
    if (called && e.target.dataset.name.length <= 3) {
      function write1() {
        document.querySelector("#res").innerHTML += this.props.output;
        this.setState({ arr: [] });
        setTimeout(
          () => this.state.j = 0, 50);
        this.state.i = 0;
      }
      setTimeout(write1.bind(this), 400);
      called = false;
    }
    if (called && e.target.dataset.name.length > 3) {
      function write2() {
        document.querySelector("#res").innerHTML += this.props.output;
        this.setState({ arr: [] });
        setTimeout(function () { this.state.j = 0; }, 500);
        this.state.i = 0;
      }
      setTimeout(write2.bind(this), 700);
      called = false;
    }
  }

  render() {
    return (
      <div onClick={this.selecteMe}>
        <button id="add" onClick={this.paste} onMouseOut={this.moveOut} className="add" data-name={this.props.num.name}>{this.props.num.code}</button>
        <p id="code">{this.props.num.name}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ filtered, output }) => {
  return { filtered, output }
}

const mapDispatchToProps = { setOutput }
export default connect(mapStateToProps, mapDispatchToProps)(Number)

