import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import NotFound from './components/404/404';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ProjectDetail from './components/Projects/ProjectDetail';
import Contact from './components/Contact/Contact';
import Mention from './components/Legal/Mention';
import Policy from './components/Legal/Policy';
import ScrollToTop from './components/Utils/ScrollToTop';
import CustomCursor from './components/Utils/CustomCursor';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <CustomCursor />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Landing />} />
        <Route path='/accueil' element={<Home />} />
        <Route path='/a-propos' element={<About />} />
        <Route path='/projets' element={<Projects />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mentions-legales' element={<Mention />} />
        <Route path='/politique-de-confidentialite' element={<Policy />} />
      </Routes>
    </div>
  );
}

export default App;
