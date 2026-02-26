import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section
        id="home"
        className=" max-h-screen pt-20 flex flex-col justify-center items-center text-white px-4"
      >
        <h1 className="text-4xl md:text-8xl font-bold mb-4 text-center">
          Hi, I'm{" "}
          <span className="text-purple-500">
            Ahmad
            <br /> Nadeem{" "}
          </span>
        </h1>

        <p className="text-lg text-gray-300  md:text-2xl mb-6 text-center max-w-xl">
          Frontend Developer | React Enthusiast | UI/UX Designer
        </p>
        <p className="text-lg md:text-2xl mb-6 text-center text-gray-300 max-w-xl">
          I'm a web developer creating modern and responsive websites.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/projects"
            className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-200 hover:text-[#5f48a0]"
          >
            View Project
          </Link>
          <Link
            to="/cv"
            className="duration-500 border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#5f48a0] transition"
          >
            View CV
          </Link>
        </div>
        <br />
        <br />
        <h2 className="arrow">
          <i className=" text-3xl text-purple-500 arrow fa-solid fa-arrow-down"></i>
        </h2>
      </section>

      <div className="py-12 px-4 md:px-20">
        <h1 className="text-4xl font-bold text-center mt-12 text-purple-500">
          What Will Client say
        </h1>
        <p className="text-center text-gray-400 mt-4 mb-8">
          Testimonials from my clients and colleagues about my work and
          professionalism
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-5 mb-40">
        <div
          className="

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-3xl shadow-md"
        >
          <div className="justify-between flex items-center mb-4">
            <h3 className="text-xl text-[white] font-bold mb-2">
              Amir Khan{" "}
              <span className="text-purple-500"> • CTO, FinTech Co.</span>
            </h3>
          </div>
          <p className="text-gray-400">
            “They shipped our SaaS MVP in 6 weeks and it scaled to 50k users
            with zero downtime .”
          </p>
        </div>
        <div
          className="

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-3xl shadow-md"
        >
          <div className="justify-between flex items-center mb-4">
            <h3 className="text-xl text-[white] font-bold mb-2">
              Sara Malik{" "}
              <span className="text-purple-500">
                {" "}
                • Head of Marketing, HealthAI
              </span>
            </h3>
          </div>
          <p className="text-gray-400">
            “The brand film lifted our conversion rate by 38%. World‑class
            storytelling.”
          </p>
        </div>
        <div
          className="

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-3xl shadow-md"
        >
          <div className="justify-between flex items-center mb-4">
            <h3 className="text-xl text-[white] font-bold mb-2">
              Ahmad Nadeem{" "}
              <span className="text-purple-500">
                {" "}
                • Senior Developer, TechSolutions
              </span>
            </h3>
          </div>
          <p className="text-gray-400">
            “Clear process, clean code, and on‑time delivery. Best vendor
            experience we’ve had.”
          </p>
        </div>
      </div>













      <div className="py-12 px-4 md:px-20">
        <h1 className="text-6xl font-bold text-center text-purple-500">
          What Will Do
        </h1>
        <p className="text-center text-gray-400 mt-4 mb-8">
          ull‑stack web apps, SaaS platforms, and cinematic films — crafted
          end‑to‑end.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5 mb-40">
        <div
          className="bg-[rgb(81,52,117)] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-3xl shadow-md"
        >
          <i className=" text-4xl bottom-8 bg-opacity-10 fa-solid fa-bolt text-purple-500"></i>

          <div className="justify-between flex items-center mb-4">
            <h3 className="text-xl mt-4 text-[white] font-bold mb-2">
              DevOps & Cloud
            </h3>
          </div>
          <p className="text-gray-400">
            CI/CD, containerization, observability, and cloud deployments
          </p>
        </div>
        <div
          className=" bg-[#513475] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-3xl shadow-md"
        >
          <i className="text-4xl fa-solid fa-earth-americas text-purple-500 mb-2"></i>
          <div className="justify-between flex items-center mb-4">
            <h3 className="text-xl text-[white] font-bold mb-2">
              Networking & Security
            </h3>
          </div>
          <p className="text-gray-400">
            Secure networks, hardening, monitoring, and incident response
          </p>
        </div>
        <div
          className="bg-[#513475] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-3xl shadow-md"
        >
          <i className="text-4xl fa-solid fa-video text-purple-500 mb-2"></i>
          <div className="justify-between flex items-center mb-4">
            <h3 className="text-xl text-[white] font-bold mt-4 mb-2">
              Video Production & CG Ads
            </h3>
          </div>
          <p className="text-gray-400">
            Commercials, product films, 2D/3D CG ads with studio-grade finishing
          </p>
        </div>
        <div
          className="bg-[#513475] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-3xl shadow-md"
        >
          <i className="fa-regular fa-star text-purple-500 text-4xl mb-2"></i>
          <div className="justify-between flex items-center mb-4">
            <h3 className="text-xl text-[white] font-bold mb-2">
              Motion Graphics & Editing
            </h3>
          </div>
          <p className="text-gray-400">
            Motion design, edit, sound, and finishing for high‑impact content
          </p>
        </div>
      </div>

      <div className="py-12 px-4 md:px-20">
        <h1 className="text-6xl font-bold text-center text-purple-500">
          Where Code Meets Creativity
        </h1>
        <p className="text-center mt-14 text-2xl text-gray-400 mb-16">
          We believe the future of digital experiences lies at the intersection
          of cutting-edge <br />
          technology and compelling storytelling. Our multidisciplinary team
          brings <br />
          together software engineers, creative directors, and visual artists to
          <br /> craft experiences that don't just function—they inspire.
        </p>
        <Link
          to="/about"
          className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center mb-8 hover:bg-gray-200 hover:text-[#5f48a0]"
        >
          Learn More
        </Link>
      </div>
    </>
  );
};

export default Home;
