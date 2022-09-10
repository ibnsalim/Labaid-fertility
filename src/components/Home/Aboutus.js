import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {motion} from "framer-motion"
import { useNavigate } from 'react-router-dom'


const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0, transition: {duration: 0.1} }}
    className='mt-7 '>
        {/* About Section Start */}
      <section class="pt-20 lg:pt-[60px] pb-12 lg:pb-[50px] overflow-hidden">
        <div class="container">
            <div class="flex flex-wrap justify-between items-center -mx-4">
              <div class="w-full lg:w-6/12 px-4">
                  <div class="flex items-center -mx-3 sm:-mx-4">
                    <div class="w-full xl:w-1/2 px-3 sm:px-4">
                        <div class="py-3 sm:py-4">
                          <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/services/image-1.jpg"
                              alt=""
                              class="rounded-2xl w-full"
                              />
                        </div>
                        <div class="py-3 sm:py-4">
                          <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/services/image-2.jpg"
                              alt=""
                              class="rounded-2xl w-full"
                              />
                        </div>
                    </div>
                    <div class="w-full xl:w-1/2 px-3 sm:px-4">
                        <div class="my-4 relative z-10">
                          <img
                              src="https://cdn.tailgrids.com/1.0/assets/images/services/image-3.jpg"
                              alt=""
                              class="rounded-2xl w-full"
                              />
                        </div>
                    </div>
                  </div>
              </div>
              
              <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
                  <div class="mt-10 lg:mt-0">
                    <span class="font-semibold text-lg text-[#369e9e] mb-2 block">
                    Why Choose Us
                    </span>
                    <h2 class="font-bold text-3xl sm:text-4xl text-gray-700 mb-8">
                        Be Happy With Our Treatments.
                    </h2>
                    <p class="text-base text-body-color mb-8">
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less.
                    </p>
                    <p class="text-base text-body-color mb-12">
                        A domain name is one of the first steps to establishing your
                        brand. Secure a consistent brand image with a domain name that
                        matches your business.
                    </p>
                        <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        className='flex justify-center text-lg font-normal rounded-full py-3 px-9 text-gray-100 bg-[#369b9b] tracking-wider mt-7 shadow-lg hover:cursor-pointer ' onClick={() => {navigate(`/doctors`, { replace: true })}}>Get Sterted <HiArrowNarrowRight className="text-gray-100 text-sm mt-1.5 ml-1" />
                        </motion.button>
                  </div>
              </div>
            </div>
        </div>
      </section>

    </motion.div>
  )
}

export default Aboutus;