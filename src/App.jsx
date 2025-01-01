import React from 'react'
import "./index.css"
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'
import Display from './Display'
import StarsCanvas from './components/StarBackground'
import Skills from './pages/Skills/Skills'
const App = () => {
  return (
    <div className='app'>
      {/* <StarsCanvas /> */}
    


      <div className="content">
        <Display></Display>

      </div>

     
    </div>
  )
}

export default App
