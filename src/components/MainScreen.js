import React from 'react'
import { connect } from 'react-redux'
import './number.css'
import '../App.css'
import Number from '../components/Number'

const MainScreen = props => {
  const devList = props.filtered.map(num =>
    <Number className="main" num={num} key={num.id} />
  )
  const trim = function (e) {
    e.target.previousElementSibling.innerHTML = e.target.previousElementSibling.innerHTML.slice(0, -1);
    console.log(props.output);
  }
  return (
    <div>
      <div id="res"></div>
      <button id="trim" onClick={trim}>Clear</button><br />
      <div className="flex-wrapper">
        {props.loading ? "Loading..." : devList}
      </div>
      <p className="descr">Click on the numbers to make a message.</p>
      <p className="descr2">Switch to Qwerty converter in the top right corner.</p>
    </div>
  )
}

const mapStateToProps = ({ filtered, loading, output }) => {
  return { filtered, loading, output }
}

export default connect(mapStateToProps)(MainScreen)