import React from 'react'
import Home from './pages/Home'
import Parent from './components/Parent'

const App = (props) => {
  return (
    <>
     <Parent city={props.city}/>
    </>
  )
}

export default App