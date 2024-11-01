import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
//import Brahma from '../Assets/Brahma.jpg'
import { Link } from 'react-scroll'
//import Bpic from '../Assets/B-pic1.jpeg'

const Home = () => {
  return (
    <div name='home' className="h-screen w-full bg-[#0a192f] ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl flex-col justify-center font-bold text-Blue">
            I'm a Java Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2.5 years of experience in Java development and web development.<br/>
            Currently, I love to work on web applications using technologies like{' '}
            <span className="text-orange">React, TailwindCSS, Java, Spring Boot, and MySQL/Oracle</span>.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-white-500 hover:cursor-pointer"
            >
              About me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={''} alt="my-profile" className="rounded-2xl mx-auto w-2/3 md:w-4/5" />
        </div>
      </div>
    </div>
  );
};

export default Home;
