import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
   <Child parentProperty={props.city}/>
  )
}

export default Parent