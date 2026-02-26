import React from 'react'

const Footer = () => {
  return (
  <footer className="bg-[#36213c] mt-11 text-white py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center ">
        
        <div className=" md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-bold">Ahmad Nadeem</h1>
          <p className="text-gray-400 mb-9" >© 2026 All rights reserved</p>
          <h2 className=' text-gray-400 mb-4'>Inventor Design Studio Is A creative technology <br />
           studio bridging software development and visual <br />
            storytelling. We build digital products and create <br /> cinematic content.</h2>
        
        <a
            href="#"
            rel="#"
            className="hover:text-purple-500 duration-300"
          >
            <i className="text-4xl fa-brands fa-square-instagram"></i>
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            className="hover:text-purple-500 duration-300"
          >
<i className="text-4xl fa-brands fa-linkedin"></i>          </a>
          <a
            href="#"
            className="hover:text-purple-500 duration-300"
          >
<i className="text-4xl fa-brands fa-github"></i>          </a>
        </div>
        <div></div>
    <div className=" ml-20 md:text-left mb-4 md:mb-0 ">
        <h3 className=' text-3xl mb-3 hover:text-purple-500 duration-300'>Navigation</h3>
<a href="/about" className="block hover:text-purple-500 duration-300">About</a>
<a href="/skills" className="block hover:text-purple-500 duration-300">Skills</a>
<a href="/projects" className="block hover:text-purple-500 duration-300">Projects</a>
<a href="/contact" className="block hover:text-purple-500 duration-300">Contact</a>
     <a href="/faq" className="block hover:text-purple-500 duration-300">FAQ</a>
<a href="/privacy" className="block hover:text-purple-500 duration-300">Privacy Policy</a>
<a href="/terms" className="block hover:text-purple-500 duration-300">Terms of Service</a>
     
        </div>
          <div className=" ml-24 md:text-left mb-4 md:mb-0">
        <h3 className=' text-3xl mb-3 hover:text-purple-500 duration-300'>What We Do !</h3>
<a href="/about" className="block mb-2 hover:text-purple-500 duration-300">Software Development
</a>
<a href="/skills" className="block mb-2 hover:text-purple-500 duration-300">Video Production
</a>
<a href="/projects" className="block mb-2 hover:text-purple-500 duration-300">Creative Agency
</a>
<a href="/contact" className="block  hover:text-purple-500 duration-300">Digital Innovation
</a>
     
        </div>
       <div className=" ml-28 md:text-left mb-4 md:mb-0">
        <h3 className=' text-4xl mb-3 hover:text-purple-500 duration-300'>Get In Touch</h3>
<a href="/about" className="block mb-2 hover:text-purple-500 duration-300"> <i className=" text-2xl  fa-solid fa-phone"></i>   
     SoftwareDevelopment@gmail.com
</a>
<a href="/skills" className="block mb-2 hover:text-purple-500 duration-300"> <i className=" text-2xl  fa-solid fa-envelope"></i>
0300 1234567
</a>
<a href="/projects" className="block mb-2 hover:text-purple-500 duration-300"> <i className=" text-2xl  fa-solid fa-location-dot"></i>
lahore, Pakistan
</a>

        </div>
      </div>
    </footer>

  )
}

export default Footer