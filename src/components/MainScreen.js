import React from 'react'
import {connect} from 'react-redux'
import './number.css'
import Number from '../components/Number'

const MainScreen = props => {

  const devList = props.filtered.map(num => 
    <Number className="main" num={num} key={num.id} />
  )
  return (
    <div className="flex-wrapper">
      {props.loading ? "Loading..." : devList}
    </div>  
  )

}

const mapStateToProps = ({filtered, loading}) => {
  return {filtered, loading}
}

export default connect(mapStateToProps)(MainScreen)