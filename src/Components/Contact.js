import React from 'react'
import solarImage from '../Assets/solar3.jpg';

const Contact =()=> {

  return (
    

    <div
  name="contact"
       className="w-full h-screen flex justify-center items-center p-2 bg-cover bg-center bg-no-repeat py-0"
     style={{ backgroundImage: `url(${solarImage})` }}>


     {/* Overlay for transparency */}
     <div className="absolute inset-0 bg-black bg-opacity-10"></div>
     
  <div className=" d-flex flex-col max-w-[600px] w-full   rounded-lg p-2">
    <div className="pb-8 flex flex-col justify-center w-full h-full items-center">
      <p className="text-4xl font-bold inline border-b-4 border-cyan-300 text-white">Contact</p>
      <p className="text-gray-300 py-4">Send me a message</p>
    </div>

    <input
      className="bg-[#ccd6f6] p-2 rounded"
      type="text"
      placeholder="Name"
      name="name"
    />
    <input
      className="my-4 p-2 bg-[#ccd6f6] rounded"
      type="email"
      placeholder="Email"
      name="email"
    />
    <textarea
      className="bg-[#ccd6f6] p-2 rounded"
      name="message"
      rows="10"
      placeholder="Message"
    ></textarea>
    <button className="text-white border-2 hover:bg-cyan-500 px-4 py-3 my-8 mx-auto flex items-center">
      Let's Collaborate
    </button>
  </div>
   </div>


  )
}

export default Contact
