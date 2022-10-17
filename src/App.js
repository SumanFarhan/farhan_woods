import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Home from './Home/Home'
import logo from '../src/asssets/logo.png'
import "./App.css"


const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <>
      {/* {loading ?
        <img src={logo} className="App-logo"/>:
      } */}
 <Home />
    </>
  )
}

export default App