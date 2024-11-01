import React from 'react'
import solor4 from '../Assets/solor4.png'
const Skills =()=> {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
       <div className="w-full h-screen flex justify-center items-center p-2 bg-cover bg-center bg-no-repeat p-4">
              {/* style={{ backgroundImage: `url(${solor4})` }}> */}
      {/* conatiner */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full flex justify-center items-center flex-col mb-7">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center">Skills</p>
          <p className="py-4 text-2xl"> I enoyed diving into and learning new things. 
            Here's a list of technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
       < div className="shadow-md shadow-[#040c16] hover:scale-125 duration-500">
          <p className="my-4">Java</p>

        </div>
        < div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <p className="my-4">Spring Boot</p>

        </div>
        < div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <p className="my-4">MySql</p>

        </div>

        < div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <p className="my-4">Oracle</p>

        </div>

        < div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <p className="my-4">RecatJS</p>

        </div>
        < div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <p className="my-4">JavaScript</p>

        </div>
        < div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <p className="my-4">Microservice</p>

        </div>
        < div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <p className="my-4">GitHub</p>

        </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Skills