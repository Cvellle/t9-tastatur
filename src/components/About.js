import React from 'react'

class Qwerty extends React.Component {
  constructor(props) {
    super(props)
  }

  combine(e) {
    if (e.keyCode == 188) {
      document.querySelector('#codes').value += "1, ";
    }
    if (e.keyCode == 190) {
      document.querySelector('#codes').value += "11, ";
    }
    if (e.keyCode == 49) {
      document.querySelector('#codes').value += "111, ";
    }
    if (e.keyCode == 65) {
      document.querySelector('#codes').value += "2, ";
    }
    if (e.keyCode == 66) {
      document.querySelector('#codes').value += "22, ";
    }
    if (e.keyCode == 67) {
      document.querySelector('#codes').value += "222, ";
    }
    if (e.keyCode == 68) {
      document.querySelector('#codes').value += "3, ";
    }
    if (e.keyCode == 69) {
      document.querySelector('#codes').value += "33, ";
    }
    if (e.keyCode == 70) {
      document.querySelector('#codes').value += "333, ";
    }
    if (e.keyCode == 71) {
      document.querySelector('#codes').value += "4, ";
    }
    if (e.keyCode == 72) {
      document.querySelector('#codes').value += "44, ";
    }
    if (e.keyCode == 73) {
      document.querySelector('#codes').value += "444, ";
    }
    if (e.keyCode == 74) {
      document.querySelector('#codes').value += "5, ";
    }
    if (e.keyCode == 75) {
      document.querySelector('#codes').value += "55, ";
    }
    if (e.keyCode == 76) {
      document.querySelector('#codes').value += "555, ";
    }
    if (e.keyCode == 77) {
      document.querySelector('#codes').value += "6, ";
    }
    if (e.keyCode == 78) {
      document.querySelector('#codes').value += "66, ";
    }
    if (e.keyCode == 79) {
      document.querySelector('#codes').value += "666, ";
    }
    if (e.keyCode == 80) {
      document.querySelector('#codes').value += "7, ";
    }
    if (e.keyCode == 81) {
      document.querySelector('#codes').value += "77, ";
    }
    if (e.keyCode == 82) {
      document.querySelector('#codes').value += "777, ";
    }
    if (e.keyCode == 83) {
      document.querySelector('#codes').value += "7777, ";
    }
    if (e.keyCode == 84) {
      document.querySelector('#codes').value += "8, ";
    }
    if (e.keyCode == 85) {
      document.querySelector('#codes').value += "88, ";
    }
    if (e.keyCode == 86) {
      document.querySelector('#codes').value += "888, ";
    }
    if (e.keyCode == 87) {
      document.querySelector('#codes').value += "9, ";
    }
    if (e.keyCode == 88) {
      document.querySelector('#codes').value += "99, ";
    }
    if (e.keyCode == 89) {
      document.querySelector('#codes').value += "999, ";
    }
    if (e.keyCode == 90) {
      document.querySelector('#codes').value += "9999, ";
    }
    if (e.keyCode == 32) {
      document.querySelector('#codes').value += "48, ";
    }
  }

  clear() {
    document.querySelector('#codes').value = "";
  }

  trim() {
    document.querySelector('#codes').value = document.querySelector('#codes').value.slice(0, -1);
  }

  render() {
    return (
      <div>
        <h1>Qwerty</h1>
        <input id="inp" onKeyDown={this.combine} />
        <button id="comb" onClick={this.trim}>Combine</button>
        <input id="codes" readonly="true" /><br />
        <button id="clear" onClick={this.clear}>Clear</button>
        <p>Add t9 code to input field on the bottom by clicking on numbers, and click "combine" button.</p>
      </div>
    )
  }
}

export default Qwerty