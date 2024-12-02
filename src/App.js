import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/Utils/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/accueil' element={<Home />} />
        <Route path='/a-propos' element={<About />} />
        <Route path='/projets' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
