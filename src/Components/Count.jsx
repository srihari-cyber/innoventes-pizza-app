import React from 'react'
import {connect} from "react-redux"

const Count = (props) => {
  const {count} = props
  return(
    <div>
      <h1>Count::{count}</h1>
    </div>
  )
}
export default connect(store => store)(Count)