import React from "react";

const Contact = () => {
  return (
    <section className="px-4 md:px-20 mt-24 mb-40">
      <div className="text-center mb-12">
        <span className="text-purple-500 font-bold uppercase text-sm">Get in Touch</span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mt-4">
          Let's Build Something Extraordinary
        </h1>
        <p className="text-gray-400 mt-4 text-lg md:text-xl">
          Have a project in mind? We'd love to hear from you. Let's create something amazing together.
        </p>
      </div>

      
      <div className="flex mt-40 flex-col md:flex-row gap-10 md:gap-20 justify-center items-start">
        <div className="md:w-1/3 mt-20 text-center md:text-left">
          <h2 className="text-5xl font-bold text-white mb-4">Let's <span className="text-purple-500">Talk</span></h2>
          <p className="text-gray-300 text-xl mb-6">
            I'm available for freelance projects and full-time opportunities.  
            Have a question or just want to say hi? I'll get back to you ASAP!
          </p>

          <button
          href="#"
            className="mb-4 px-36 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-100 hover:text-purple-800 transition-colors duration-300"
          >
            <i className="fa-solid fa-envelope mr-2"></i>Email Me
          </button>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-4xl text-white">
            <a href="#" className="hover:text-purple-500 transition"> <i className="fa-brands fa-instagram"></i> </a>
            <a href="#" className="hover:text-purple-500 transition"> <i className="fa-brands fa-linkedin"></i> </a>
            <a href="#" className="hover:text-purple-500 transition"> <i className="fa-brands fa-github"></i> </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="md:w-2/3 bg-[#513475]/10 border border-[#2b1e3a] rounded-3xl p-8 shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded-xl bg-[#2b1e3a]/40 text-white border border-[#2b1e3a]" />
            <input type="email" placeholder="Email Address" className="p-3 rounded-xl bg-[#2b1e3a]/40 text-white border border-[#2b1e3a]" />
            <input type="tel" placeholder="Phone Number" className="p-3 rounded-xl bg-[#2b1e3a]/40 text-white border border-[#2b1e3a]" />
            <input type="text" placeholder="Subject" className="p-3 rounded-xl bg-[#2b1e3a]/40 text-white border border-[#2b1e3a]" />
            <textarea rows="5" placeholder="Your Message" className="md:col-span-2 p-3 rounded-xl bg-[#2b1e3a]/40 text-white border border-[#2b1e3a]"></textarea>
          </div>
          <button
            onClick={() => window.location.href = `mailto:ahmadnadeemwebdev@gmail.com`}
            className="mt-6 w-full px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;