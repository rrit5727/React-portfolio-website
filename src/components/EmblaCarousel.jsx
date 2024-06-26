import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla w-full h-full ">
      <div className="embla__viewport h-full dark:text-white" ref={emblaRef}>
        <div className="embla__container">

          <div className="embla__slide flex md:flex-row sm:flex-col h-4/5 justify-center items-center">
            <div className='pl-5 pt-10 md:w-3/5 sm:w-4/5 h-4/5 rounded-lg'>
              <img 
              src="https://raw.githubusercontent.com/tdha/project-three/main/Readme_imgs/Results.png" 
              className='object-center rounded-lg w-full h-full' 
              />
            </div>
            <div className='md:w-1/3 md:h-3/5  '>
              <div className=' px-10 py-15 text-center flex flex-col justify-center rounded-lg object-contain'>
                <h1 className='md:text-2xl sm:text-xl  sm:pt-5 pb-5 border-b-4  border-b-secondary'>AFFORDABLE COMMUTE FINDER</h1>
                <p className='pt-5 sm:text-sm'>
                  React App that calculates travel time (by car and public transport) between the users place 
                  of work and various recently sold properties. The results are grouped according to 15 minute 
                  time bands and sorted by affordability.
                </p>
                <p className='md:pt-10 sm:pt-4 sm:text-sm'>
                  This app uses the travel time and openstreet APIs to calculate co-ordinates and travel time 
                  for 1000s of properties
                </p>
              </div>              
            </div>
          </div>

          <div className="embla__slide flex md:flex-row sm:flex-col h-4/5 justify-center items-center">
            <div className='pl-5 pt-10 md:w-3/5 sm:w-4/5 h-4/5 rounded-lg'>
              <img 
              src="https://raw.githubusercontent.com/rrit5727/project4/main/Readme_imgs/Home_page.png" 
              className='object-center rounded-lg w-full h-full' 
              />
            </div>
            <div className='md:w-1/3 md:h-3/5 sm: '>
              <div className=' px-10 py-15 text-center flex flex-col justify-center rounded-lg object-contain'>
                <h1 className='text-2xl sm:pt-5 pb-5 border-b-4  border-b-secondary'>METACRITIC FOR SONGS</h1>
                <p className='pt-5'>
                Python app that that generates a critical consensus for popular songs by scraping music publications 
                end of year lists.
                </p>
                <p className='md:pt-10 sm:pt-4'>
                Scraping done using beautiful soup. Makes calls to 2 different Spotify API end points.
                </p>
              </div>              
            </div>
          </div>

          <div className="embla__slide flex md:flex-row sm:flex-col h-4/5 justify-center items-center">
            <div className='pl-5 pt-10 md:w-3/5 sm:w-4/5 h-4/5 rounded-lg'>
              <img 
              src="https://raw.githubusercontent.com/rrit5727/Project2/main/Readme_images/Item-list.png" 
              className='object-center  rounded-lg w-full h-full' 
              />
            </div>
            <div className='md:w-1/3 md:h-3/5 sm: '>
              <div className=' px-10 py-15 text-center flex flex-col justify-center rounded-lg object-contain'>
                <h1 className='text-2xl sm:pt-5 pb-5 border-b-4  border-b-secondary'>DOMESTIC SUPPLY MONITORING APP</h1>
                <p className='pt-5'>
                  Node.js App that links to MongDB that allows the user to monitor groceries and activities that
                   depend on that supply.
                </p>                
                <p className='md:pt-10 sm:pt-4'>
                  A shopping list can be generated for items that are running low. 
                </p>
              </div>              
            </div>
          </div>

          <div className="embla__slide flex md:flex-row sm:flex-col h-4/5 justify-center items-center">
            <div className='pl-5 md:pt-20 sm:pt-10  md:w-3/5 sm:w-4/5 h-4/5 rounded-lg'>
              <img 
              src="https://raw.githubusercontent.com/rrit5727/Portfolio-website/main/Readme_imgs/Portfolio.png" 
              className='object-center rounded-lg w-full h-full' 
              />
            </div>
            <div className='md:w-1/3 md:h-3/5 sm: '>
              <div className=' px-10 py-15 text-center flex flex-col justify-center rounded-lg object-contain'>
                <h1 className='text-2xl sm:pt-5 pb-5 border-b-4  border-b-secondary'>PERSONAL PORTFOLIO</h1>
                <p className='pt-5'>
                  Personal portfolio website created using React. Styling done using tailwind, TypeAnimation 
                  and embla carousel.  
                </p>                
              </div>              
            </div>
          </div>       
        </div>
      </div>
      <button 
        className="embla__prev absolute left-0 top-1/2 transform -translate-y-1/2
        bg-gray-800 text-white p-2 rounded-full ml-4"
        onClick={scrollPrev}
      >
        <BsChevronCompactLeft className='sm:w-4 sm:h-4 md:w-6 md:h-6'/>        
      </button>
      <button 
        className="embla__next absolute right-0 top-1/2 transform -translate-y-1/2
         bg-gray-800 text-white p-2 rounded-full mr-4" 
         onClick={scrollNext}
      >
        <BsChevronCompactRight className='sm:w-4 sm:h-4 md:w-6 md:h-6'/>        
      </button>
    </div>
  )
}