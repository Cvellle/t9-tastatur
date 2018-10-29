import React from 'react'
import ReactDOM from 'react-dom';
import './number.css'

let i = 0;
let j = 0; 
let inside = false;


class Number extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      arr: []
    };

    this.paste = this.paste.bind(this);

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
  
    if (j === 1) {
      called = true;
    }

    if (e.target.dataset.name.length<=3) {
      if (i === 1) {
        this.setState({arr: e.target.dataset.name.charAt(0)});
        }  
      if (i === 2) {
        this.setState({arr: e.target.dataset.name.charAt(1)});
        }  
      if (i === 3) {
        i = 0;
        this.setState({arr: e.target.dataset.name.charAt(2)});
        }
    }


    if (e.target.dataset.name.length>3) {
      if (i === 1) {
        this.setState({arr: e.target.dataset.name.charAt(0)});
      }  
      if (i === 2) {
        this.setState({arr: e.target.dataset.name.charAt(1)});
      }
      if (i === 3) {
        this.setState({arr: e.target.dataset.name.charAt(2)});
      }
      if (i === 4) {
        i = 0;
        this.setState({arr: e.target.dataset.name.charAt(3)});
      }
    }


  if (called && e.target.dataset.name.length <= 3) {

    function write1() {    
      document.querySelector("#res").innerHTML += this.state.arr;
      this.setState({arr: []});
      console.log(this.state.arr)
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
      document.querySelector("#res").innerHTML += this.state.arr;
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

export default Number
