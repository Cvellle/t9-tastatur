import React from 'react'
import ReactDOM from 'react-dom';
import './number.css'
import {connect} from 'react-redux'
import {setOutput} from '../store/actions'

let i = 0;
let j = 0; 
let inside = false;


class Number extends React.Component {

  constructor(props) {

    super(props);

    this.paste = this.paste.bind(this);

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
    this.props.setOutput(["2"]);

   e.stopPropagation();

   let called = false;
  
    if (j === 1) {
      called = true;
    }

    if (e.target.dataset.name.length<=3) {
      if (i === 1) {
        this.props.setOutput([e.target.dataset.name.charAt(0)]);
        }  
      if (i === 2) {
        this.props.setOutput([e.target.dataset.name.charAt(1)]);
        }  
      if (i === 3) {
        i = 0;
        this.props.setOutput([e.target.dataset.name.charAt(2)]);
        }
    }


    if (e.target.dataset.name.length>3) {
      if (i === 1) {
        this.props.setOutput([e.target.dataset.name.charAt(0)]);
      }  
      if (i === 2) {
        this.props.setOutput([e.target.dataset.name.charAt(1)]);
      }
      if (i === 3) {
        this.props.setOutput([e.target.dataset.name.charAt(2)]);
      }
      if (i === 4) {
        i = 0;
        this.props.setOutput([e.target.dataset.name.charAt(3)]);
      }
    }


  if (called && e.target.dataset.name.length <= 3) {

    function write1() {    
      document.querySelector("#res").innerHTML += this.props.output;
      this.setState({arr: []});
      setTimeout(
          function() { j=0; }, 50);
      inside = false;
         i = 0;
       }

      setTimeout(write1.bind(this), 400);
      
      called = false;
    }  
    
  if (called && e.target.dataset.name.length > 3) {

    function write2() {    
      document.querySelector("#res").innerHTML += this.props.output;
      this.setState({arr: []});
      setTimeout(
          function() { j=0; }, 500);
      inside = false;
         i = 0;
       }

      setTimeout(write2.bind(this), 700);
      
      called = false;
    }  

}

  render() {

    return (
      <div onClick={this.selecteMe}>
        <button  id="add" onClick={this.paste} onMouseOut={this.moveOut} className="add" data-name={this.props.num.name}>{this.props.num.code}</button>
        <p id="code">{this.props.num.name}</p>
      </div>
    )
  }
}



const mapStateToProps = ({filtered, output}) => {
  return {filtered, output}
}

const mapDispatchToProps = { setOutput }

// export default connect(mapStateToProps)(Number)
export default connect(mapStateToProps, mapDispatchToProps)(Number)

// export default Number
