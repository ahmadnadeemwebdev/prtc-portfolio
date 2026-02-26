import React from 'react'

const Contact = () => {
  return (

<>
<div className="text-center mb-8 mt-24">
  
  <span className="text-purple-500 font-bold ">GET IN TOUCH</span>
  <h1 className="text-6xl mt-4 font-bold text-white">
    Let's Build Something Extraordinary

  </h1>
  <p className="text-gray-400 mt-4 text-xl">Have a project in mind? We'd love to hear from you. Get in touch and let's create <br /> something amazing together.</p>
</div>





  <div id="contact"
  className="mt-40 mb-40 max-w-3xl mx-auto
  bg-[#513475]/10 border border-[#2b1e3a]
  rounded-3xl p-8 shadow-md
  transition-all duration-500 hover:border-purple-500"
>
  <h2 className="text-3xl font-bold text-white text-center mb-3">
    Contact Me
  </h2>

  <p className="text-center text-[#6b4697] mb-8">
    Have a project in mind or want to work together? Let’s talk.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

 
    <input
    name='name'
  className="w-full p-3 rounded-xl
      bg-[#2b1e3a]/40 text-white
      border border-[#2b1e3a]
    "
      type="text"
      placeholder="Your Name"
    
    />

    <input
    name='email'
       className="w-full p-3 rounded-xl
      bg-[#2b1e3a]/40 text-white
      border border-[#2b1e3a]
   "
      type="email"
      placeholder="Email Address"
   
    />
        <input
        name="phone"
       className="w-full p-3 rounded-xl
      bg-[#2b1e3a]/40 text-white
      border border-[#2b1e3a]
   "
      type="telephone"
      placeholder="Phone Number"
   
    />
        <input
        name="subject"
       className="w-full p-3 rounded-xl
      bg-[#2b1e3a]/40 text-white
      border border-[#2b1e3a]
   "
      type="text"
      placeholder="Subject"
   
    />

    <textarea
    name="message"
      className="md:col-span-2 w-full p-3 rounded-xl
      bg-[#2b1e3a]/40 text-white
      border border-[#2b1e3a]
   "
    type="text"
      rows="5"
      placeholder="Enter Your Message"
    
    ></textarea>

  </div>

  <button
    type="submit"
    className="mt-6 w-full px-10 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-center transition-all duration-300 block mx-auto"
  >
    Send Message
  </button>
</div>

</>
  )
}

export default Contact