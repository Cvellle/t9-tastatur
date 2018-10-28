import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import './number.css'
import {setOutput} from '../store/actions'

let i = 0;
let j = 0; 
let inside = false;
let arr = [];

class Number extends React.Component {

   constructor(props) {
    super(props)
   
    // this.state = {
    //   arra: this.props.output
    // };

  }

  componentDidMount() {
    
  }

  moveIn() {
    inside= true;
}

  moveOut() {
    inside = false;
    i = 0;
}

  paste(e) {
    i += 1;
    j += 1;

   e.stopPropagation();

   let called = false;
  
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


  if (called && e.target.dataset.name.length <= 3) {

      setTimeout(function() {
        document.querySelector("#res").innerHTML += arr.pop();
        setTimeout(function() { j=0; }, 50);
        inside = false;
        i = 0;
      }, 400);
      

      called = false;
    }  
    
  if (called && e.target.dataset.name.length > 3) {

      setTimeout(function() {
        document.querySelector("#res").innerHTML += arr.pop();
        setTimeout(function() { j=0; }, 500);
        inside = false;
        i = 0;
      }, 700);
      

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

const mapDispatchToProps = { setOutput }

export default connect(null, mapDispatchToProps)(Number)
