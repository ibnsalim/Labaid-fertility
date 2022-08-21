import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'

const Doctors = () => {
  const navigate = useNavigate();
  return (
    <div className='mt-16 mb-20'>
        <p className='text-4xl font-semibold text-gray-700 text-center mb-4'>Who With Us?</p>
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
        </div>
    </div>
  )
}

export default Doctors;