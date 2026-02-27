import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <nav className="sticky top-0 w-full bg-white/5 backdrop-blur-lg shadow-md z-50 border-b border-[#5f48a0] text-white px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold hover:text-[#5f48a0] duration-300">Ahmad</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 justify-center flex-1">
          <Link to="/home" className="hover:text-[#5f48a0] duration-200">Home</Link>
          <Link to="/about" className="hover:text-[#5f48a0] duration-200">About</Link>
          <Link to="/skills" className="hover:text-[#5f48a0] duration-200">Skills</Link>
          <Link to="/projects" className="hover:text-[#5f48a0] duration-200">Projects</Link>
          <Link to="/contact" className="hover:text-[#5f48a0] duration-200">Contact</Link>
        </div>

        {/* Desktop CV button */}
        <div className="hidden md:block">
          <button className="bg-purple-500 hover:bg-white hover:text-[#21393c] text-white font-bold py-2 px-4 rounded">
            Digital CV
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl font-bold"
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="flex flex-col gap-4 absolute top-full left-0 w-full bg-white/90 text-black p-4 md:hidden">
            <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <button className="bg-purple-500 hover:bg-white hover:text-[#21393c] text-white font-bold py-2 px-4 rounded mt-2">
              Digital CV
            </button>
          </div>
        )}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;