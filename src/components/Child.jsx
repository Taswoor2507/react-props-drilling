import React from 'react'
import GrandChild from './GrandChild'

const Child = (props) => {
  return (
    <GrandChild  childProperty={props.parentProperty}/>
  )
}

export default Child