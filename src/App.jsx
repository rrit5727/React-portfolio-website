import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin} from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import headshot from './assets/headshot.jpg';
import css from './assets/dev-icons/css.png';
import aws from './assets/dev-icons/aws.png';
import bootstrap from './assets/dev-icons/bootstrap.png';
import express from './assets/dev-icons/express.png';
import github from './assets/dev-icons/github.png';
import html from './assets/dev-icons/html.png';
import js from './assets/dev-icons/js.png';
import mongodb from './assets/dev-icons/mongodb.png';
import next from './assets/dev-icons/next.png';
import node from './assets/dev-icons/node.png';
import postgresql from './assets/dev-icons/postgresql.png';
import python from './assets/dev-icons/python.png';
import react from './assets/dev-icons/react.png';
import tailwind from './assets/dev-icons/tailwind.png';
import { useState, useRef, useEffect } from 'react'
import './App.css'
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { red } from "tailwindcss/colors";
import {EmblaCarousel} from './components/EmblaCarousel';
import { useInView } from "react-intersection-observer";



export default function App() {
  
  
  const [darkMode, setDarkMode] = useState(false);
  const [textColor, setTextColor] = useState('black');
  const [fontWeight, setFontWeight] = useState('normal');
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !animationTriggered) {
      setAnimationTriggered(true);
    }
  }, [inView, animationTriggered]);

  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

  const sectionsRef = {
    intro: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
  };

  function scrollToSection(section) {
    sectionsRef[section].current.scrollIntoView({ behavior: 'smooth' });
    setShowSidebar(false); // Close sidebar after scrolling
  }


  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }

  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  


  return (
    
      <div className={`w-screen h-screen ${darkMode ? "dark" : ""}`} style={{ margin: 0, padding: 0 }}>
        
        <head>
          <title>Portfolio</title>
          <meta name="description"/>
          <link rel="icon" href="/favicon.ico" />
        </head>
        

        <main className="bg-customGreen  dark:bg-gray-900 relative w-full h-full m-0">
          <div className="h-screen md:snap-y md:snap-mandatory overflow-scroll px=10 m-0" >
          
            <nav className="px-5 pt-10 sm:pt-3 pb-10 sm:pb-2 mb-12 sm:mb-2 flex justify-between dark:text-white sticky top-0 z-50 bg-customGreen dark:bg-gray-900">
              <div class="fadeInUp">
                <h1 className="text-3xl font-burtons">R . R</h1>
              </div>
              <motion.div
                initial={{ x: 0, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <ul className="flex items-center" class="sidebar">                
                  <li onClick={hideSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
                  </li>
                  <li>
                    <a className="
                        text-black dark:text-white  px-4 py-2  ml-8
                        border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                       onClick={() => scrollToSection("intro")}>Intro
                    </a>
                  </li>
                  <li>
                    <a className="
                        text-black dark:text-white  px-4 py-2  ml-8
                        border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                       onClick={() => scrollToSection("about")}>About
                    </a>
                  </li>
                  <li>
                    <a className="
                        text-black dark:text-white  px-4 py-2  ml-8
                        border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                       onClick={() => scrollToSection("projects")}>Projects
                    </a>
                  </li>
                  <li>
                    <a className="
                        text-black dark:text-white  px-4 py-2  ml-8
                        border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                       onClick={() => scrollToSection("skills")}>Skills
                    </a>
                  </li>
                  <li>
                    <a className="
                        text-black dark:text-white  px-4 py-2  ml-8
                        border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                      href="https://github.com/rrit5727/Employment/raw/main/Ross%20Ritchie%20CV.pdf">CV
                    </a>
                  </li>
                </ul>

                <ul className="flex items-center" >                
                  <li class="hideOnMobile">
                    <a className="
                        text-black dark:text-white  px-4 py-2  ml-8
                        border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                       onClick={() => scrollToSection("intro")}>Intro
                    </a>
                  </li>
                  <li class="hideOnMobile">
                    <a className="
                        text-black dark:text-white  px-4 py-2  ml-8
                        border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                       onClick={() => scrollToSection("about")}>About
                    </a>
                  </li>
                  <li class="hideOnMobile">
                    <a className="
                        text-black dark:text-white  px-4 py-2  ml-8
                        border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                       onClick={() => scrollToSection("projects")}>Projects
                    </a>
                  </li>
                  <li class="hideOnMobile">
                    <a className="
                        text-black dark:text-white  px-4 py-2  ml-8
                        border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                       onClick={() => scrollToSection("skills")}>Skills
                    </a>
                  </li>
                  <li class="hideOnMobile">
                    <a className="
                        text-black dark:text-white  px-4 py-2  ml-8
                        border-b-0 hover:border-b-4 hover:border-b-secondary dark:hover:border-b-secondary_dark" 
                      href="https://github.com/rrit5727/Employment/raw/main/Ross%20Ritchie%20CV.pdf">CV
                    </a>
                  </li>
                  <li class="menu-button" onClick={showSidebar}>
                    <div className="text-3xl flex justify-center gap-16 py-1 px-2 text-iconColor dark:text-gray-400 ">
                      <a href="https://github.com/rrit5727/" target="blank">
                        <FaGithub className='text-iconColor'/>
                      </a>            
                    </div>                  
                  </li>
                  <li class="menu-button" onClick={showSidebar}>
                    <div className="text-3xl flex justify-center gap-16 py-1 px-2 text-iconColor dark:text-gray-400 ">
                      <a href="https://www.linkedin.com/in/ross-ritchie-631b20a2/" target="blank">
                        <AiFillLinkedin className='text-iconColor'/>
                      </a>            
                    </div>                  
                  </li>
                  <li class="menu-button" onClick={showSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>                  
                  </li>
                </ul>
              </motion.div>
            </nav>

        
                                                    
                <section id="intro" ref={sectionsRef.intro} className="snap-start md:pt-20 sm:pt-2 md:py-20 sm:py-2 flex-row h-4/5 md:mb-40  overflow-hidden">
                  <div className="md:pt-20 sm:pt-2 relative px-40 flex flex-col md:flex-row md:space-y-5 sm:space-y-1  items-center justify-evenly text-center md:text-left md:max-h-fit" >
                    <div className="text-left md:p-10 sm:p-2  whitespace-nowrap">
                      <h4 className="text-2xl py-2 md:text-3xl dark:text-white">Hello, my name is </h4>
                      <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">Ross Ritchie</h2>
                      <span className="text-3xl dark:text-white">I am a </span> 
                          <span className="text-3xl" style={{ color: textColor, fontWeight: fontWeight }}>
                            <TypeAnimation 
                              cursor={false}              
                              className={CURSOR_CLASS_NAME}
                              sequence={[
                                // Same substring at the start will only be typed out once, initially
                                ' corporate tax consultant.',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                ' Software developer',
                                () => setTextColor('#14b8a6'),
                                () => setFontWeight('Bold'),
                                3000,
                                ' Software developer.',                  
                                (el) => el.classList.remove('custom-type-animation-cursor'),                
                              ]}
                              wrapper="span"
                              speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                              style={{  display: 'block', width: '150px' }}
                              class="custom-type-animation-cursor"
                              repeat={0}
                            />
                          

                          </span>
                      <h4 className="text-1xl py-2 md:text-2xl dark:text-white">Based in Sydney</h4>
                    </div>           
                    <div className="w-[40px] min-w-[40px]">              
                    </div>
                    <div className="relative md:h-[380px] md:w-[380px] md:min-w-[380px] sm:h-[250px] sm:w-[250px] sm:min-w-[250px] bg-gradient-to-b from-teal-600 rounded-full overflow-hidden border-8 border-teal-500 border-solid " >
                      <div className="rounded-full  overflow-hidden ">
                        <img src={headshot} layout="fill" objectFit="cover" className='transform -translate-y-10' />
                      </div>
                    </div>
                  </div>
                  <div  className="flex flex-row items-center justify-center">        
                    <div className="text-5xl flex justify-center gap-16 py-1 px-2 text-iconColor dark:text-gray-400 ">
                      <a class="hideOnMobile" href="https://www.linkedin.com/in/ross-ritchie-631b20a2/" target="blank">
                        <AiFillLinkedin className='text-iconColor'/>
                      </a>            
                    </div>
                    <div className="text-5xl flex justify-center gap-16 py-1 px-2 text-iconColor dark:text-gray-400">
                      <a class="hideOnMobile" href="https://github.com/rrit5727/" target="blank">
                        <FaGithub className='text-iconColor'/>
                    </a>            
                    </div>
                  </div>
                </section>
                

            
                <section id="about" ref={sectionsRef.about} className="snap-start md:pt-20 sm:pt-10 overflow-hidden h-full md:mb-40 bg-customGreen dark:bg-gray-900 dark:text-white">
                    <div ref={ref} className="text-black text-3xl font-bold items-center justify-center pt-10 pb- flex flex-row">
                      <img 
                        src="https://raw.githubusercontent.com/rrit5727/Portfolio-website/main/Readme_imgs/GPT.png" 
                        className="rounded-lg  h-[40px] " 
                      />
                      <h1 className="text-3xl font-bold pl-5 dark:text-white">Chat GP-ME</h1>
                    </div>
                    <div className="md:pt-5 sm:pt-2 relative md:px-20 sm:px-5 flex flex-col space-y-5 items-start justify-evenly text-center md:text-left md:max-h-fit">
                      <div className="text-left text-2xl w-full max-w-7xl mx-auto">
                        <div className="flex flex-col items-start">
                          <h5 className="text-xl font-bold md:mb-2">User</h5>
                          <div className="bg-teal-200 dark:bg-teal-800 p-2 rounded-lg shadow-lg md:mb-5 w-full md:text-xl sm:text-sm">
                            {animationTriggered && (
                              <TypeAnimation
                                cursor={false}
                                className="custom-type-animation-cursor"
                                style={{ whiteSpace: 'pre-line', height: 'auto', display: 'block' }}
                                sequence={[
                                  `Tell me about yourself.`,
                                  1000,                  
                                  (el) => el.classList.remove('custom-type-animation-cursor'),
                                ]}
                                speed={{ type: 'keyStrokeDelayInMs', value: 15 }}
                                omitDeletionAnimation={true}
                                repeat={0}
                              />
                            )}
                          </div>
                          <h5 className="text-xl font-bold md:mb-2">Ross</h5>
                          <div className="bg-teal-200 dark:bg-teal-800 p-2 rounded-lg shadow-lg md:mb-5 w-full md:text-xl sm:text-sm">
                            {animationTriggered && (
                              <TypeAnimation
                                cursor={false}
                                className="custom-type-animation-cursor"
                                style={{ whiteSpace: 'pre-line', height: 'auto', display: 'block' }}
                                sequence={[
                                  ``,
                                  2000,
                                  `Sure!
                                  
                                  I started out as a corporate tax consultant and found that I really enjoyed using excel formulas to streamline analysing transaction data for tax purposes.
                                  
                                  I soon realised that the best part of my job was using algorithmic thinking to solve problems, speed up manual processes, and reduce errors.
                                  
                                  I figured that coding would be a better fit for this type of creative problem-solving and I would practice coding after finishing my day job as a tax consultant.
                                  
                                  The late-nights didn't bother me as my enthusiasm for coding meant that I could happily spend hours on a project that solved a practical problem.
                                  
                                  I worked in a team throughout my previous career and was also the main point of contact for the clients that I managed. As a result, I bring valuable skills that complement the technical skills required in software engineering.`,
                                  
                                  (el) => el.classList.remove('custom-type-animation-cursor'),
                                ]}
                                speed={{ type: 'keyStrokeDelayInMs', value: 15 }}
                                omitDeletionAnimation={true}
                                repeat={0}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className=""></div>
                    </div>
                  </section>
                

              
                  <section id="projects" ref={sectionsRef.projects} className="h-screen snap-start pt- flex justify-center items-center">              
                    <div className="flex flex-col items-center justify-center md:h-3/5 md:w-4/5 sm:h-4/5 sm:w-4/5  rounded-lg overflow-hidden">
                      <h1 className="text-3xl pb-5 dark:text-white">
                        Projects
                      </h1>
                      <div className="h-full w-full m-auto py-5 px-0 relative group bg-teal-200 rounded-lg overflow-hidden dark:bg-teal-800" >
                        <EmblaCarousel />
                      </div>  
                    </div>
                  </section>
                   
                  
             
                  <section id="skills" ref={sectionsRef.skills} className=" h-screen snap-start pt-20">
                    <div className="flex-col justify-center items-center text-center justify-items-end">
                      <div className="h-[100px] pt-10">
                        <h3 className="text-3xl py-1 dark:text-white">Skills</h3>                                        
                      </div>
                      <div id="grid-container" className="flex justify-center flex-wrap sm:px-0 sm:mx-0 dark:text-teal-800">
                        <div className="
                        justify-center justify-items-center text-center
                        md:grid md:grid-cols-6 md:grid-rows-3 md:min-w-[900px] 
                        sm:grid sm:grid-cols-3 sm:grid-rows-5 sm:min-w-[400px]">            
                            <div className="fadeInUp relative md:h-[150px] sm:h-[75px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden">
                              <img src={css}  objectfit="cover" classname="md:w-[100px] sm:w-[50px] md:h-[100px] sm:h-[50px] py-10" />                
                            </div>            
                          <div className="fadeInUp relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden">
                            <img src={js} layout="fill" objectfit="cover" classname="w-[100px] md:h-[100px] md:sm[1005]" />md:
                          </div> 
                          <div className="fadeInUp relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden">
                            <img src={aws} layout="fill" objectfit="cover" classname="w-[100px] md:h-[100px] md:sm[1005]" />md:
                          </div> 
                          <div className="fadeInUp relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden">
                            <img src={bootstrap} layout="fill" objectfit="cover" classname="w-[100px] md:h-[100px] md:sm[1005]" />md:
                          </div> 
                          <div className="fadeInUp relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden">
                            <img src={express} layout="fill" objectfit="contain" classname="w-[100px] md:h-[100px] md:sm[1005]" />
                          </div> 
                          <div className="fadeInUp relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden">
                            <img src={github} layout="fill" objectfit="cover" classname="w-[100px] md:h-[100px] md:sm[1005]" />md:
                          </div> 
                          <div className="fadeInUp relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden">
                            <img src={html} layout="fill" objectfit="cover" classname="w-[100px] md:h-[100px] md:sm[1005]" />md:
                          </div> 
                          <div className="fadeInUp relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden">
                            <img src={mongodb} layout="fill" objectfit="cover" classname="w-[100px] md:h-[100px] md:sm[1005]" />md:
                          </div> 
                          <div className="fadeInUp relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden">
                            <img src={next} layout="fill" objectfit="cover" classname="w-[100px] md:h-[100px] md:sm[1005]" />md:
                          </div> 
                          <div className="fadeInUp relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden">
                            <img src={node} layout="fill" objectfit="cover" classname="w-[100px] md:h-[100px] md:sm[1005]" />md:
                          </div> 
                          <div className="fadeInUp relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden">
                            <img src={postgresql} layout="fill" objectfit="cover" classname="w-[100px] md:h-[100px] md:sm[1005]" />md:
                          </div> 
                          <div className="fadeInUp relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden">
                            <img src={python} layout="fill" objectfit="cover" classname="w-[100px] md:h-[100px] md:sm[1005]" />md:
                          </div> 
                          <div className="fadeInUp 
                            relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden  
                            sm:col-start-1 md:col-start-2 " >
                            <img src={react} layout="fill" objectfit="cover" classname="md:w-[100px] sm:w-[50px] md:h-[100px] sm:h-[50px]" />
                          </div>
                          <div className="fadeInUp 
                            relative md:h-[100px] sm:h-[50px] md:w-[100px] sm:w-[50px] bg-gradient-to-b overflow-hidden  
                            sm:col-start-2 md:col-start-3 " >
                            <img src={tailwind} layout="fill" objectfit="cover" classname="md:w-[100px] sm:w-[50px] md:h-[100px] sm:h-[50px]" />
                          </div>
                          {/* <div className="relative h-[100px] w-[100px] bg-gradient-to-b overflow-hidden  sm:col-start-3 sm:grid-row-start-4 " >
                            <img src={tailwind} layout="fill" objectfit="cover" classname="w-[100px] h-[100px]" />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </section>
                  
      

                     
          </div>
        </main>
      </div>
    
  );
}
