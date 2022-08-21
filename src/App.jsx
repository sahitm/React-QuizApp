import { useState } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import './App.css'
import Highscore from './Components/Highscore.jsx'
import { Routes, Route, Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/highscore" element={<Highscore />} />
        </Routes> 
        

    </div>
  )
}

export default App
