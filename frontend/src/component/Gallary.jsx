import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

function Gallary() {
  return (
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Title text1={'GALLARY'} text2={'SECTION'} />

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:flex mb-20'>
              {/* First Image - Visible on all screen sizes */}
              <div className='overflow-hidden h-[500px] cursor-pointer'>
                  <img
                      src={assets.home_image1}
                      alt=""
                      className='h-full w-full rounded-md hover:scale-110 transition ease-in-out'
                  />
              </div>

              {/* Second Column - Hidden on xs, sm, md */}
              <div className='h-[500px] cursor-pointer hidden md:flex flex-col justify-between'>
                  <div className='overflow-hidden'>
                      <img
                          src={assets.home_image4}
                          alt=""
                          className='h-full w-full rounded-md hover:scale-110 transition ease-in-out'
                      />
                  </div>
                  <div className='overflow-hidden'>
                      <img
                          src={assets.home_image4}
                          alt=""
                          className='h-full w-full rounded-md hover:scale-110 transition ease-in-out'
                      />
                  </div>
                  
              </div>

              {/* Third Column - Hidden on xs, sm, md */}
              <div className='overflow-hidden h-[500px] cursor-pointer hidden sm:block'>
                  <img
                      src={assets.home_image1}
                      alt=""
                      className='h-full w-full rounded-md hover:scale-110 transition ease-in-out'
                  />
              </div>
          </div>
    </div>
  )
}

export default Gallary