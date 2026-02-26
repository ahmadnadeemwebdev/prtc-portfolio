import React from "react";

const Skills = () => {
  return (
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
            <h3 className="text-xl text-[white] font-bold mb-2">JavaScript </h3>
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
  );
};

export default Skills;
