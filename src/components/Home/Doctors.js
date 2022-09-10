import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

const Doctors = () => {
  const navigate = useNavigate();
  return (
    <motion.div 
    className='mb-8 '
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0, transition: {duration: 0.1} }}
    >
      <section class="pt-10 lg:pt-[50px] pb-12 lg:pb-[70px] overflow-hidden">
      <div class="container">
          <div class="flex flex-wrap justify-around items-center -mx-4">

            <div class="w-full lg:w-1/2 xl:w-5/12 px-4">
                <div class="mt-10 lg:mt-0">
                  <span class="font-semibold text-lg text-[#369e9e] mb-2 block">
                  Who With Us
                  </span>
                  <div>
                    <h2 class="font-bold text-3xl sm:text-4xl text-gray-700 mb-4">
                    Prof. Dr. Mariam Faruqui
                    </h2>
                    <p class="text-lg text-gray-800 mb-8 font-semibold">
                    Gynaecologist, Obstetrician & Infertility Specialist
                    </p>
                  </div>
                  
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
                      className='flex justify-center text-lg font-normal rounded-full py-3 px-9 text-gray-100 bg-[#369b9b] tracking-wider mt-7 shadow-lg hover:cursor-pointer ' onClick={() => {navigate(`/doctors/professor-dr.mariam-faruqui`, { replace: true })}}>Doctor's Profile <HiArrowNarrowRight className="text-gray-100 text-sm mt-1.5 ml-1" />
                      </motion.button>
                </div>
            </div>

            <div class="w-full lg:w-6/12 px-4">
                
                  <div class="w-full xl:w-3/4 px-3 sm:px-4">
                    <img
                      src="https://hopeinfertilitycentrebd.com/wp-content/uploads/2019/12/Doctor-Mariam.jpg"
                      alt=""
                      class="rounded-xl w-full"
                      /> 
                  </div>
                
            </div>
          </div>
      </div>
    </section>
        {/* <p className='text-4xl font-semibold text-gray-700 text-center mb-4'>Who With Us?</p>
        <div className='flex flex-col justify-center items-center mt-14 space-y-6'>
            <img src='https://hopeinfertilitycentrebd.com/wp-content/uploads/2019/12/Doctor-Mariam.jpg' alt='doctor-mariam' className='w-60 h-auto rounded-lg ' />
            <div className='space-y-1'>
                <p className='text-4xl text-[#56c0c0] font-semibold'>Prof. Dr. Mariam Faruqui</p>
                <p className='text-lg font-medium'>Gynaecologist, Obstetrician & Infertility Specialist</p>
            </div>

            <div className='grid grid-cols-5'>
            <div className='col-span-1'></div>
            <div className='col-span-3 mt-3 space-y-5 flex flex-col justify-center items-center'>
                <p className='text-center'>Prof. Dr. Marium Faruqui is serving as <strong> Senior Gynecologist, Obstetrician & Infertility specialist</strong> at Hope Infertility Centre. She is also serving as Senior Consultant, Gynaecology & Obstetrics & Infertility Specialist at Lab Aid Specialized Hospital. She has several national and international publications to her credit. She is widely travelled and participated in several international seminars/workshops.</p>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className='flex justify-center text-md font-semibold rounded-full px-4 text-gray-100 bg-[#369b9b] tracking-wider mt-7 p-2 shadow-lg hover:cursor-pointer ' onClick={() => {navigate(`/doctors/professor-dr.mariam-faruqui`, { replace: true })}}>View Doctor's Profile
                  <HiArrowNarrowRight className="text-gray-100 text-sm mt-1.5 ml-1" />
                  </motion.button>
            </div>
            <div className='col-span-1'></div>
        </div>
        </div> */}
    </motion.div>
  )
}

export default Doctors;