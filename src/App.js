import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Home from './Home/Home'
import { BrowserRouter ,Routes, Route,Link} from "react-router-dom";
import Productanotherpage from './products/Productanotherpage';
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
      <BrowserRouter>
        <Routes>
          <Route  exact path="/" element={<Home/>} />
          <Route  exact path="/productpage" element={<Productanotherpage/>} />
        </Routes>
      </BrowserRouter>
      {/* {loading ?
        <img src={logo} className="App-logo"/>:
      } */}
      {/* <Home /> */}
    </>
  )
}

export default App