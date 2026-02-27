import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div id="about" className=" mt-18 py-12 px-4 md:px-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl mt-10 font-bold mb-6 text-center text-white">
            Our <span className="text-purple-500">Story</span>
          </h1>
        </div>

        <div className="mb-12">
          <p className="text-gray-300 text-center text-xl leading-relaxed max-w-3xl mx-auto">
            Founded in 2018, Inventer Design Studio emerged from a shared
            vision: to create digital products and experiences that transcend
            trends and stand the test of time. What began as a small collective
            of engineers and designers has evolved into a full-service digital
            studio. Our multidisciplinary approach brings together expertise in
            software engineering, UX, branding, and digital experiences. We
            believe that great design happens at the intersection of usefulness
            and delight, where creativity meets purpose. Today, we work with
            clients around the globe, building products and brands through
            innovative thinking, rigorous engineering, and a relentless pursuit
            of excellence.{" "}
          </p>

          <p className="text-purple-500 font-bold text-center mt-4">
            Trusted by over 50+ clients worldwide
          </p>
        </div>

        <div>
          {/* <h2 className="text-xs mt-10 mb-10 font-bold  text-center text-purple-500">
        About Me. /
      </h2> */}
          <h1 className="text-4xl font-bold text-center mb-20 text-white">
            About <span className="text-purple-500">Me</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-6 px-6  rounded-3xl shadow-md 
    bg-[#513475]/10 border border-[#2b1e3a]
    transition-all duration-500
    hover:border-purple-500 hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Who Am I?</h3>
            </div>

            <p className="text-[#6b4697] leading-relaxed">
              I'm Ahmad Nadeem — a passionate Frontend Developer who builds
              modern web applications. My focus is on clean code, fast
              performance, and user-friendly interfaces.
            </p>
          </div>

          <div
            className="p-6 px-6  rounded-3xl shadow-md 
    bg-[#513475]/10 border border-[#2b1e3a]
    transition-all duration-500
    hover:border-purple-500 hover:shadow-lg"
          >
            <h1 className="text-4xl font-bold text-white mb-2">1+</h1>

            <p className="text-purple-500 font-bold">Years of Experience</p>
          </div>
        </div>

        <div
          className="bg-[#513475] mt-4 bg-opacity-10 
  border border-[#2b1e3a]
  hover:border-purple-500 
  transition-all duration-500 
  p-6 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl text-white font-bold">About Me</h3>
            <p className="text-[#614386] hover:text-purple-500">Frontend</p>
          </div>
          <ul className="text-[#6b4697] space-y-2 list-disc list-inside">
            <li>Clean & maintainable frontend code</li>
            <li>Responsive UI with modern design</li>
            <li>Performance & accessibility focused</li>
          </ul>
        </div>
      </div>
      <div className="py-12 px-4 md:px-20">
        <h1 className="text-6xl font-bold text-center text-purple-500">
          Our Core Values
        </h1>
        <p className="text-center text-gray-400 mt-4 mb-8">
          The principles that guide every decision and design we create
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
          <i className="fa-solid fa-lightbulb text-purple-500 text-4xl mb-2"></i>
          <div className="justify-between flex items-center mb-4">
            <h3 className="text-xl mt-4 text-[white] font-bold mb-2">
              Innovation{" "}
            </h3>
          </div>
          <p className="text-gray-400">
            Pushing boundaries with creative solutions that challenge
            conventions{" "}
          </p>
        </div>
        <div
          className=" bg-[#513475] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-3xl shadow-md"
        >
          <i className="fa-regular fa-circle-dot text-purple-500 text-4xl mb-2"></i>
          <div className="justify-between flex items-center mb-4">
            <h3 className="text-xl text-[white] font-bold mb-2">Precision </h3>
          </div>
          <p className="text-gray-400">
            Meticulous attention to detail in every aspect of our work{" "}
          </p>
        </div>
        <div
          className="bg-[#513475] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-3xl shadow-md"
        >
          <i className="fa-solid fa-medal text-purple-500 text-4xl mb-2"></i>
          <div className="justify-between flex items-center mb-4">
            <h3 className="text-xl text-[white] font-bold mt-4 mb-2">
              Excellence{" "}
            </h3>
          </div>
          <p className="text-gray-400">
            Committed to delivering the highest quality in every project{" "}
          </p>
        </div>
        <div
          className="bg-[#513475] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-3xl shadow-md"
        >
          <i className="fa-solid fa-users text-purple-500 text-4xl mb-2"></i>

          <div className="justify-between flex items-center mb-4">
            <h3 className="text-xl text-[white] font-bold mb-2">
              Collaboration{" "}
            </h3>
          </div>
          <p className="text-gray-400">
            Building partnerships that inspire and create lasting impact{" "}
          </p>
        </div>
      </div>

      <div className="h-96 flex justify-center items-center rounded-3xl shadow-md mb-40 bg-gradient-to-r from-purple-800 via-purple-500 to-purple-300">
        <div
          id="contact"
          className="mt-16 max-w-3xl mx-auto
  bg-[#513475]/10 border border-[#2b1e3a]
  rounded-3xl p-8 shadow-md bg-[#1b0321]
  transition-all duration-500 hover:border-purple-500"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            Let's Build Something Extraordinary{" "}
          </h2>

          <p className="text-center text-[#6b4697] mb-8">
            Ready to transform your vision into reality? We'd love to hear about
            your project.{" "}
          </p>

          <Link
            to="/contact"
            className="mt-6 w-full px-10 py-3 rounded-xl
             bg-purple-600 hover:bg-purple-700
             text-white font-semibold text-center
             transition-all duration-300 block mx-auto"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
