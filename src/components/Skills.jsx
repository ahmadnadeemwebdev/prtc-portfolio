import React from "react";
import { Link } from "react-router-dom";
const Skills = () => {
  return (
    <>
      <div id="skills" className="  py-12 px-4 md:px-20">
        <h2 className="text-xs font-bold mb-5 text-center text-purple-500">
          My Skills
        </h2>
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white-800">
          Technical <span className="text-purple-500">Expertise</span>
        </h1>
        <p className="text-center font-bold mb-8 text-gray-400">
          Technologies I've mastered through dedicated learning and real-world
          projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-[#513475] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-lg shadow-md"
          >
            <div className="justify-between flex items-center mb-4">
              <h3 className="text-xl text-[white] font-bold mb-2">HTML5 </h3>
              <p className="text-[#614386] hover:text-purple-500  ">90%</p>
            </div>
            <p className="text-[#6b4697]">Semantic markup & accessibility</p>
          </div>
          <div
            className="bg-[#513475] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-lg shadow-md"
          >
            <div className="justify-between flex items-center mb-4">
              <h3 className="text-xl text-[white] font-bold mb-2">CSS3 </h3>
              <p className="text-[#614386] hover:text-purple-500  ">90%</p>
            </div>
            <p className="text-[#6b4697]">Animations & responsive layouts</p>
          </div>
          <div
            className="bg-[#513475] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-lg shadow-md"
          >
            <div className="justify-between flex items-center mb-4">
              <h3 className="text-xl text-[white] font-bold mb-2">
                JavaScript{" "}
              </h3>
              <p className="text-[#614386] hover:text-purple-500  ">85%</p>
            </div>
            <p className="text-[#6b4697]">DOM manipulation & ES6 features</p>
          </div>
          <div
            className="bg-[#513475] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-lg shadow-md"
          >
            <div className="justify-between flex items-center mb-4">
              <h3 className="text-xl text-[white] font-bold mb-2">React </h3>
              <p className="text-[#614386] hover:text-purple-500  ">80%</p>
            </div>
            <p className="text-[#6b4697]">Component architecture & hooks</p>
          </div>
          <div
            className="bg-[#513475] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-lg shadow-md"
          >
            <div className="justify-between flex items-center mb-4">
              <h3 className="text-xl text-[white] font-bold mb-2">
                Tailwind CSS
              </h3>
              <p className="text-[#614386] hover:text-purple-500  ">70%</p>
            </div>
            <p className="text-[#6b4697]">
              Utility-first styling & responsive design
            </p>
          </div>
          <div
            className="bg-[#513475] bg-opacity-10 

border border-[#2b1e3a]
hover:border-purple-500 
transition-all duration-500 
p-6 rounded-lg shadow-md"
          >
            <div className="justify-between flex items-center mb-4">
              <h3 className="text-xl text-[white] font-bold mb-2">
                Responsive Design
              </h3>
              <p className="text-[#614386] hover:text-purple-500  ">75%</p>
            </div>
            <p className="text-[#6b4697]">
              Mobile-first approach & cross-browser compatibility
            </p>
          </div>
        </div>
      </div>

      <div className=" text-center mt-16">
        <span className="text-purple-500 border-2 rounded-full p-1 border-purple-500">
          Experience
        </span>
        <h2 className="text-4xl mt-5 font-bold text-white mb-3">
          Professional Journey
        </h2>
      </div>

      <div
        id="contact"
        className="mt-16 max-w-3xl mx-auto
  bg-[#513475]/10 border border-[#2b1e3a]
  rounded-3xl p-8 shadow-md bg-[#1b0321]
  transition-all duration-500 hover:border-purple-500"
      >
        <div className="mb-4 justify-between flex items-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Senior Full Stack Engineer
          </h2>

          <h3 className="text-sm text-gray-400">Jan 2023 - Present</h3>
        </div>
        <span className="text-purple-500">InnovateX Systems</span>
        <p className="mt-4  text-gray-300 mb-8">
          Leading the architectural vision and development of enterprise-scale
          cloud applications. Managing a cross-functional team of developers to
          deliver high-performance solutions.
        </p>

        <p className="text-gray-400">
          {" "}
          <i className="fa-solid fa-arrow-right-from-bracket text-purple-500 mr-2"></i>{" "}
          Architected and deployed a microservices ecosystem on AWS Lambda,
          handling 1M+ daily requests.
        </p>
        <p className="text-gray-400">
          {" "}
          <i className="fa-solid fa-arrow-right-from-bracket text-purple-500 mr-2"></i>{" "}
          Reduced infrastructure costs by 35% through containerization
          (Docker/Kubernetes) and resource optimization.
        </p>
        <p className="text-gray-400">
          {" "}
          <i className="fa-solid fa-arrow-right-from-bracket text-purple-500 mr-2"></i>{" "}
          Spearheaded the adoption of Next.js 14, improving SEO and reducing
          First Contentful Paint by 40%.
        </p>
      </div>
      <div
        id="contact"
        className="mt-10 max-w-3xl mx-auto
  bg-[#513475]/10 border border-[#2b1e3a]
  rounded-3xl p-8 shadow-md bg-[#1b0321]
  transition-all duration-500 hover:border-purple-500"
      >
        <div className="mb-4 justify-between flex items-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Full Stack Developer
          </h2>

          <h3 className="text-sm text-gray-400">Mar 2021 - Dec 2022</h3>
        </div>
        <span className="text-purple-500">Nexus Digital Solutions</span>
        <p className="mt-4  text-gray-300 mb-8">
          Core developer for flagship SaaS products, focusing on backend
          scalability and frontend performance. Collaborated closely with
          product managers to define feature roadmaps.
        </p>

        <p className="text-gray-400">
          {" "}
          <i className="fa-solid fa-arrow-right-from-bracket text-purple-500 mr-2"></i>
          Developed a real-time analytics dashboard using React, D3.js, and
          WebSockets.
        </p>
        <p className="text-gray-400">
          {" "}
          <i className="fa-solid fa-arrow-right-from-bracket text-purple-500 mr-2"></i>
          Optimized PostgreSQL database schemas and queries, improving data
          retrieval speeds by 60%.
        </p>
        <p className="text-gray-400">
          {" "}
          <i className="fa-solid fa-arrow-right-from-bracket text-purple-500 mr-2"></i>
          Implemented robust authentication systems (OAuth2, JWT) enhancing
          application security.
        </p>
      </div>
      <div
        id="contact"
        className="mt-10 mb-32 max-w-3xl mx-auto
  bg-[#513475]/10 border border-[#2b1e3a]
  rounded-3xl p-8 shadow-md bg-[#1b0321]
  transition-all duration-500 hover:border-purple-500"
      >
        <div className="mb-4 justify-between flex items-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Frontend Developer{" "}
          </h2>

          <h3 className="text-sm text-gray-400">Jun 2019 - Feb 2021</h3>
        </div>
        <span className="text-purple-500">Creative Pulse Agency</span>
        <p className="mt-4  text-gray-300 mb-8">
          Focused on delivering pixel-perfect, responsive web interfaces for
          diverse client projects. Acted as the bridge between design and
          engineering teams.
        </p>

        <p className="text-gray-400">
          {" "}
          <i className="fa-solid fa-arrow-right-from-bracket text-purple-500 mr-2"></i>
          Built and launched 15+ custom websites using React and Headless CMS
          platforms.
        </p>
        <p className="text-gray-400">
          {" "}
          <i className="fa-solid fa-arrow-right-from-bracket text-purple-500 mr-2"></i>{" "}
          Improved accessibility (WCAG 2.1) across client sites, ensuring
          compliance and broader reach.
        </p>
        <p className="text-gray-400">
          {" "}
          <i className="fa-solid fa-arrow-right-from-bracket text-purple-500 mr-2"></i>
          Automated frontend testing workflows, reducing bug reports in
          production by 25%.
        </p>
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

export default Skills;
