import React from 'react'
import code from '../Assets/code.jpg';
import code1 from '../Assets/code1.jpg';
import project from '../Assets/project.jpeg';
import solor4 from '../Assets/solor4.png'
const Works = () => {
  return (
    <div name ='work' className=' w-full md:h-screen text-gray-300 '>
             <div className="w-full h-screen flex justify-center items-center p-2 bg-cover bg-center bg-no-repeat p-4"
              style={{ backgroundImage: `url(${solor4})` }}>
        <div className=' container max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div classname='pb-8 w-full flex justify-center items-center flex-col'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
              Work
            </p>
            <p className='py-6 text-2xl'>Check out some of most recent work</p>
          </div>
         {/* container */}
         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* grit Items */}
      
          <div style={{backgroundImage: `url(${project})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-1 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-wider'>
                Banking Application
              </span>
              <p className='text-center'>A Banking application built with Java, springBoot and Mysql</p>
           <div className='pt-8 text-center'>
            <a href='https://github.com/brahma143'> 
             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-125 text-red-700 font-bold text-lg'>
              Demo
             </button>
            </a>
          <a href="https://github.com/brahma143">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:scale-125 text-gray-700 font-bold text-lg'>
            Code
          </button>
          </a>
           </div>
            </div>
           </div>

          
           <div style={{backgroundImage: `url(${code1})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-1 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-winder'>
                Banking Application
              </span>
              <p className='text-center'>A Banking application built wit Java, springBoot and Mysql</p>
           <div className='pt-8 text-center'>
            <a href='/'> 
             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg'>
              Demo
             </button>
            </a>
          <a href="/">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
            Code
          </button>
          </a>
           </div>
            </div>
           </div>

            
          <div style={{backgroundImage: `url(${project})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-1 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-winder'>
                Banking Application
              </span>
              <p className='text-center'>A Banking application built wit Java, springBoot and Mysql</p>
           <div className='pt-8 text-center'>
            <a href='/'> 
             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg'>
              Demo
             </button>
            </a>
          <a href="/">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
            Code
          </button>
          </a>
           </div>
            </div>
           </div>

            
          <div style={{backgroundImage: `url(${project})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-1 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className='text-lg font-bold text-white tracking-winder'>
                Banking Application
              </span>
              <p className='text-center'>A Banking application built wit Java, springBoot and Mysql</p>
           <div className='pt-8 text-center'>
            <a href='/'> 
             <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg'>
              Demo
             </button>
            </a>
          <a href="/">
          <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
            Code
          </button>
          </a>
           </div>
            </div>
           </div>

           <div
            style={{ backgroundImage: `url(${project})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-1 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                CBT Application
              </span>
              <p className='text-center'>A CBT web application built with React and Mongodb</p>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
           
         </div>
        </div>
        <div>

        </div>
        </div>
    </div>
  )
}

export default Works