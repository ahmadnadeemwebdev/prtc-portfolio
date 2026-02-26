import React from "react";

import {BrowserRouter as Router,Routes,Route,Link,} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <nav className="sticky top-0 w-full bg-white/5 backdrop-blur-lg shadow-md z-50 border-b border-[#5f48a0] text-white px-6 py-4 flex items-center justify-between">
        <h1 className="duration-300 text-xl font-bold hover:text-[#5f48a0]">
          Ahmad
        </h1>

        <div className="flex gap-8 justify-center flex-1">
          <Link to="/home" className="hover:text-[#5f48a0]">Home</Link>
   <Link to="/about" className="hover:text-[#5f48a0]">About</Link>
          <Link to="/skills" className="hover:text-[#5f48a0]">Skills</Link>
                    <Link to="/projects" className="hover:text-[#5f48a0]">Projects</Link>

          <Link to="/contact" className="hover:text-[#5f48a0]">Contact</Link>

        </div>

        <button className="bg-purple-500 hover:bg-white hover:text-[#21393c] text-white font-bold py-2 px-4 rounded">
          Digital CV
        </button>
      </nav>

      <Routes>

            <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />
     <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;