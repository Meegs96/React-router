
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue"
import Red from "./components/Red"
import Home from "./components/Home"

function App() {

  return (
    <>
    <div id="container">
      <h1></h1>
      <div id="navbar">
        <Link to={"/red"}red></Link>
        <Link to={"blue"}blue></Link>
        <Link to="/">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
        <Route path="/blue" element={<h1>Blue</h1>} />
        <Route path="/red" element={<h1>Red</h1>} />
        <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
      
    </>
  )
}

export default App
