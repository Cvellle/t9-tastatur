import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import './number.css'

let i = 0;
let j = 0; 
var inside = false;
var arr =[];

class Number extends React.Component {

  moveIn() {
    var inside= true;
}

  moveOut() {
    var inside = false;
    i = 0;
}

  paste(e) {
    i += 1;
    j += 1;

   e.stopPropagation();

   var called = false;
  
    if (j == 1) {
      called = true;
    }

    if (e.target.dataset.name.length<=3) {
      if (i == 1) {
        arr.push(e.target.dataset.name.charAt(0));
        }  
      if (i == 2) {
        arr.push(e.target.dataset.name.charAt(1));
        }  
      if (i == 3) {
        i = 0;
        arr.push(e.target.dataset.name.charAt(2));
        }
    }



    if (e.target.dataset.name.length>3) {
      if (i == 1) {
        arr.push(e.target.dataset.name.charAt(0));
      }  
      if (i == 2) {
        arr.push(e.target.dataset.name.charAt(1));
      }
      if (i == 3) {
        arr.push(e.target.dataset.name.charAt(2));
      }
      if (i == 4) {
        i = 0;
        arr.push(e.target.dataset.name.charAt(3));
      }
    }

    if (called) {

      setTimeout(function() {
        document.querySelector("#res").innerHTML += arr.pop();
        setTimeout(function() { j=0; }, 300);
        inside = false;
        i = 0;
      }, 500);

      called = false;
    }  

}

  render() {

    return (
      <div onClick={this.selecteMe}>
        <button  id="add" onClick={this.paste} onMouseOut={this.moveOut} className="add" data-name={this.props.num.name}>{this.props.num.code}</button>
        <div id="show"></div> 
        <p id="code">{this.props.num.name}</p>
      </div>
    )
  }
}
export default Number
