import React, { useState } from 'react'
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
//import {BsFilePersonLinesFill} from 'react-icons/bs';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import {Link} from 'react-scroll';

const Navbar =()=> {

    const[nav,setnav]=useState(false);
    const handleClick =() => setnav(!nav);

  return (


    <div className='fixed w-full h-[80px] flex justify-between items-center px bg-[#0a192f] text-gray-300'>
    <div>
      <h1 className=' font-thin text-2xl italic font-serif'>Brahma Reddy</h1>
    </div>
    {/* menu */}
    <ul className='hidden md:flex gap-x-8'>
      <li>
        <Link to='home' smooth={true} duration={900}>
          Home
        </Link>
      </li>
      <li>
        <Link to='about' smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link to='skills' smooth={true} duration={500}>
          Skills
        </Link>
      </li>
      <li>
        <Link to='work' smooth={true} duration={500}>
          Work
        </Link>
      </li>
      <li>
        <Link to='contact' smooth={true} duration={500}>
          Contact
        </Link>
      </li>
    </ul>

    {/*menu*/}
   
   
   
    {/* Hamburger */}
     <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars />: <FaTimes />}
    </div> 
    {/* Mobile menu */}
     <ul
     className={
        !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center'
     }>
        <li className='py-6 text-4xl'>
            
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className='py-6 text-4xl'>
            { ' '}
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li className='py-6 text-4xl'>
            { ' '}
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
        </li>
        <li className='py-6 text-4xl'>
            { ' '}
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>Works</Link>
        </li>
        <li className='py-6 text-4xl'>
            { ' '}
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
     </ul> 
     {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      
        <ul>
           
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:scale-125 duration-300 bg'>
           <a className='flex justify-between items-center w-full text-gray-300 '
           href='https://www.linkedin.com/in/brahma-reddy-lingam'
           //www.linkedin.com/in/brahma-reddy-linginamam-448226189
            >
            Linkedin <FaLinkedin size={30} ></FaLinkedin>
            </a>
           </li>
           
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:scale-125 duration-300 '>
           <a className='flex justify-between items-center w-full text-gray-300 '
           href='https://github.com/brahma143'
            >
            GitHub <FaGithub size={30} ></FaGithub>
            </a>
           </li>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:scale-125 duration-300 '>
           <a className='flex justify-between items-center w-full text-gray-300 '
           href='brahmareddy.085lingam@gmail.com'
            >
            Email <HiOutlineMail size={30} ></HiOutlineMail>
            </a>
           </li>
           <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:scale-125 duration-300 '>
           <a className='flex justify-between items-center w-full text-gray-300 '
           href='/'
            >
            Resume <BsFillPersonLinesFill size={30} ></BsFillPersonLinesFill>
            </a>
           </li>
        </ul>
     </div> 
    </div>
    
  )
}

export default Navbar;