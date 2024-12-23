import React from 'react'
import "./index.css"
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'
import Display from './Display'
import video from "../public/background.mp4"
const App = () => {
  return (
    <div className='app'>
         
    <Nav></Nav>
    <div className="content">
      <Display></Display>
    </div>
    {/* <Display></Display> */}
    <Footer></Footer>
    </div>
  )
}

export default App
