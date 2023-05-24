import React from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom'




function App() {
  return (
    <>
  <Navbar />
      <Routes>
        <Route path='/' element={ 
          <>
  
      <Hero />
      <About />
      <Projects />
<Contact />
          </>

        }
        
        
        />


        <Route path='/blog' element={<Blog /> }/>

      </Routes>
    




      </>
  )
}

export default App