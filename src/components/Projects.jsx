import React from 'react'

const Projects = () => {
  return (
    <div id="projects" className=" py-12 px-4 md:px-20">
      <h2 className="text-xs font-bold mb-5 text-center text-purple-500">
        My Projects. /
      </h2>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 text-center text-white-800">
        Recent <span className="text-purple-500"> Projects </span>
      </h1>
      <p className="text-center font-bold mb-20 text-gray-400">
        A showcase of my latest work, demonstrating my skills and creativity
      </p>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div
          className="bg-[#513475] bg-opacity-10 border border-[#2b1e3a]
          hover:border-purple-500 transition-all duration-500 p-6 h-100 rounded-lg shadow-md"
        >

            <div>
<img className='w-full sm:h-full md:h-full lg:h-72 hover:blur-sm duration-300 object-cover rounded-lg' src="code.png" alt="description"></img> 
           </div>
           
          <h3 className="text-xl text-[white] font-bold mt-4 mb-2">Portfolio Website</h3>
          <p className="text-[#6b4697] mb-4">
            A personal portfolio website built with React and Tailwind CSS to
          </p>
          <div className='flex text-center justify-center gap-20'>
          <a href="https://example.com/" className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:text-[#5f48a0]">
           Live demo
          </a>
            <a href="https://github.com/example/repo" className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:text-[#5f48a0]">
          <i class=" fa-brands fa-github"></i> Code 
          </a>
</div>
             </div>
             <div
          className="bg-[#513475] bg-opacity-10 border border-[#2b1e3a]
          hover:border-purple-500 transition-all duration-500 p-6 h-100 rounded-lg shadow-md"
        >

            <div>
<img className='w-full sm:h-full md:h-full lg:h-72 hover:blur-sm duration-300 object-cover rounded-lg' src="Epage.png" alt="description"></img> 
           </div>
          <h3 className="text-xl text-[white] font-bold mt-4 mb-2"> E-Commerce Store Website</h3>
          <p className="text-[#6b4697] mb-4">
            A fully responsive e-commerce website built with React and Tailwind CSS.
          </p>
           <div className='flex text-center justify-center gap-20'>
          <a href="https://example.com/" className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:text-[#5f48a0]">
           Live demo
          </a>
            <a href="https://github.com/example/repo" className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:text-[#5f48a0]">
          <i class=" fa-brands fa-github"></i> Code 
          </a>
</div>
          
             </div>
              <div
          className="bg-[#513475] bg-opacity-10 border border-[#2b1e3a]
          hover:border-purple-500 transition-all duration-500 p-6 h-100 rounded-lg shadow-md"
        >

            <div>
<img className='w-full sm:h-full hover:blur-sm duration-300 md:h-full lg:h-72 object-cover rounded-lg' src="port.png" alt="description"></img> 
           </div>
          <h3 className="text-xl text-[white] font-bold mt-4 mb-2">Weather App</h3>
          <p className="text-[#6b4697] mb-4">
            A responsive weather application built with React and Tailwind CSS.
          </p>
            <div className='flex text-center justify-center gap-20'>
          <a href="https://example.com/" className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:text-[#5f48a0]">
           Live demo
          </a>
            <a href="https://github.com/example/repo" className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:text-[#5f48a0]">
          <i class=" fa-brands fa-github"></i> Code 
          </a>
</div>
          
             </div>
                     <div
          className="bg-[#513475] bg-opacity-10 border border-[#2b1e3a]
          hover:border-purple-500 transition-all duration-500 p-6 h-100 rounded-lg shadow-md"
        >

            <div>
<img className='w-full hover:blur-sm duration-300 sm:h-full md:h-full lg:h-72 object-cover rounded-lg' src="defi.png" alt="description"></img> 
           </div>
          <h3 className="text-xl text-[white] font-bold mt-4 mb-2">DeFi Asset Tracker</h3>
          <p className="text-[#6b4697] mb-4">
Cryptocurrency portfolio tracker aggregating data from multiple exchanges and wallets in real-time.          </p>
            <div className='flex text-center justify-center gap-20'>
          <a href="https://example.com/" className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:text-[#5f48a0]">
           Live demo
          </a>
            <a href="https://github.com/example/repo" className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:text-[#5f48a0]">
          <i class=" fa-brands fa-github"></i> Code 
          </a>
</div>

             </div>
                     <div
          className="bg-[#513475] bg-opacity-10 border border-[#2b1e3a]
          hover:border-purple-500 transition-all duration-500 p-6 h-100 rounded-lg shadow-md"
        >

            <div>
<img className='w-full hover:blur-sm duration-300 sm:h-full md:h-full lg:h-72 object-cover rounded-lg' src="ai.png" alt="description"></img> 
           </div>
          <h3 className="text-xl text-[white] font-bold mt-4 mb-2">AI Content Studio</h3>
          <p className="text-[#6b4697] mb-4">
Generative AI platform for automated blog post and social media content creation with SEO optimization. <br />         </p>
           <div className='flex text-center justify-center gap-20'>
          <a href="https://example.com/" className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:text-[#5f48a0]">
           Live demo
          </a>
            <a href="https://github.com/example/repo" className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:text-[#5f48a0]">
          <i class=" fa-brands fa-github"></i> Code 
          </a>
</div>

             </div>
                     <div
          className="bg-[#513475] bg-opacity-10 border border-[#2b1e3a]
          hover:border-purple-500 transition-all duration-500 p-6 h-100 rounded-lg shadow-md"
        >

            <div>
<img className='w-full hover:blur-sm duration-300 sm:h-full md:h-full lg:h-72 object-cover rounded-lg' src="saas.png" alt="description"></img> 
           </div>
          <h3 className="text-xl text-[white] font-bold mt-4 mb-2">SaaS Analytics Dashboard <br />
          <br /></h3>
          <p className="text-[#6b4697] mb-4">
Real-time data visualization platform for marketing metrics.          </p>
           <div className='flex text-center justify-center gap-20'>
          <a href="https://example.com/" className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:text-[#5f48a0]">
           Live demo
          </a>
            <a href="https://github.com/example/repo" className="duration-500 bg-[#5f48a0] text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:text-[#5f48a0]">
          <i class=" fa-brands fa-github"></i> Code 
          </a>
</div>

             </div>
            </div>
            </div>
  )
}

export default Projects