import React from 'react'
import ReactDOM from 'react-dom'

class Qwerty extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      output: []
    };

    this.combine = this.combine.bind(this);

  }

  componentDidMount() {
    document.querySelector('.search').parentNode.style.display="none";
  }

  combine(e) {
    if (e.keyCode === 188) {
      this.state.output.push("  1");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 190) {
      this.state.output.push("  11");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 49) {
      this.state.output.push("  111 ");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 65) {
      this.state.output.push("  2");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 66) {
      this.state.output.push("  22 ");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 67) {
      this.state.output.push("  222");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 68) {
      this.state.output.push("  3");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 69) {
      this.state.output.push("  33");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 70) {
      this.state.output.push("  333");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 71) {
      this.state.output.push("  4");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 72) {
      this.state.output.push("  44");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 73) {
      this.state.output.push("  444");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 74) {
      this.state.output.push("  5");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 75) {
      this.state.output.push("  55");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 76) {
      this.state.output.push("  555");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 77) {
      this.state.output.push("  6");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 78) {
      this.state.output.push("  66");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 79) {
      this.state.output.push("  666");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 80) {
      this.state.output.push("  7");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 81) {
      this.state.output.push("  77");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 82) {
      this.state.output.push("  777");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 83) {
      this.state.output.push("  7777");
      document.querySelector('#codes').value = this.state.output;
    }
      if (e.keyCode === 84) {
      this.state.output.push("  8");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 85) {
      this.state.output.push("  88");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 86) {
      this.state.output.push("  888");
      document.querySelector('#codes').value = this.state.output;
    }
     if (e.keyCode === 87) {
      this.state.output.push("  9");
      document.querySelector('#codes').value = this.state.output;
    }
     if (e.keyCode === 88) {
      this.state.output.push("  99");
      document.querySelector('#codes').value = this.state.output;
    }
    if (e.keyCode === 89) {
      this.state.output.push("  999");
      document.querySelector('#codes').value = this.state.output;
    }
     if (e.keyCode === 90) {
      this.state.output.push("  9999");
      document.querySelector('#codes').value = this.state.output;
    }
     if (e.keyCode === 32) {
      this.state.output.push("  0");
      document.querySelector('#codes').value = this.state.output;
    }

     if (e.keyCode === 8) {
      // document.querySelector('#codes').value = this.state.output[this.state.output.length-1];
      this.state.output.pop();
      document.querySelector('#codes').value = this.state.output;
      let inp = document.querySelector('#inp').value = document.querySelector('#inp').value;
      inp.slice(0,-1);
    }
    
  }

  clear() {
    document.querySelector('#codes').value = "";
    document.querySelector('#inp').value = "";
  }


  render() {

    return (
      <div>
        <h1>Qwerty to t9</h1>
        <textarea id="inp" onKeyDown={this.combine}></textarea><br/>
        <button  id="clear" onClick={this.clear}>Clear All</button><br/>
        <textarea ut id="codes" readonly="true"></textarea>
        <p id="descr-qw">Type and see the text converted into T9 code.</p>
      </div>
      )
    }
  }

export default Qwerty