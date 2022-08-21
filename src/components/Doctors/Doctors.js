import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { doctor_info } from '../../data';
import { animate, motion } from "framer-motion"
import { HiArrowNarrowRight } from 'react-icons/hi'


const Doctors = () => {



  const navigate = useNavigate();
  return(
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0, transition: {duration: 0.1} }}
    >

    <div className='flex flex-col justify-center items-center'>
      <div className='grid grid-cols-2 w-[600px] h-auto md:w-[700px] md:h-[450px] lg:w-[800px] lg:h-[500px] mx-auto bg-gray-200 shadow-xl'>
          <div className='bg-white ' onClick={() => {navigate(`/doctors/professor-dr.mariam-faruqui`, { replace: true })}}>
            <img src='https://hopeinfertilitycentrebd.com/wp-content/uploads/2019/12/Doctor-Mariam.jpg' alt='doctor-1' className='h-[500px] w-full' />
          </div>
          
          <div className='bg-gray-800 h-[500px]'>
            <div className='mx-8 my-10 space-y-3'>
              <div>
                <p className='text-lg text-[#66cccc]'>Profile</p>
                <h1 className='text-xl lg:text-2xl font-semibold text-gray-50'>Prof. Dr. Mariam Faruqui</h1>
                <p className='text-sm md:text-md text-gray-200 mt-1'>MS(Gaynae), FCPS(Gaynae), DGO, MCPS </p>
                <p className='text-md text-gray-200 mt-1'>Labaid fertility center,</p>
                <p className='text-md text-gray-200 mt-1'>Dhanmondi, Dhaka.</p>
              </div>

              <div className=''>
                <p className='text-lg text-[#66cccc] '>Specialty</p>
                <div className='space-x-2 flex flex-wrap'>
                  <p className='text-md text-gray-100 '>Obstetrics and Gynaecology</p>
                  
                </div>
              </div>
              <div>
                <p className='text-lg text-[#66cccc]'>Experience</p>
                <p className='text-md text-gray-200 mt-0.5'>30 Years + </p>
              </div>

              <div>
                <p className='text-lg text-[#66cccc]'>Contact</p>
                <p className='text-md text-gray-200 mt-0.5'>+880 1762 112055</p>
              </div>

              <div className=''>
                <p className='text-lg text-[#66cccc]'>Address</p>
                <p className='text-md text-gray-200 mt-0.5'>Labaid fertility center,</p>
                <p className='text-md text-gray-200 mt-0.5'>Location: Mirpur road, Dhanmondi, Dhaka</p>
              </div>
            </div>
          </div>
            
        </div>
        <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className='flex justify-center text-md font-semibold rounded-full px-4 text-gray-100 bg-[#369b9b] tracking-wider mt-4 p-2 shadow-lg hover:cursor-pointer ' onClick={() => {navigate(`/doctors/professor-dr.mariam-faruqui`, { replace: true })}}>View Doctor's Profile <HiArrowNarrowRight className="text-gray-100 hover:text-lg text-sm mt-1.5 ml-1" />
        </motion.button>
      </div>
      {/* Grid End */}

      <div
      className='mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
        {
          doctor_info.map((doctor, index)=> (
            <motion.div key={index} className='rounded-md shadow-lg p-4' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}>
              <div class="relative overflow-hidden bg-no-repeat bg-cover " data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={() => {navigate(`/assistant-doctors/${doctor.name}`, { replace: true })}}>
                <img src={doctor.src} alt='' class="w-full h-40" />
                <Link to="">
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                </Link>
              </div>

              <div class="pl-2 pt-3">
                <div className='flex items-center' >
                  <p class="font-[roboto] text-[12px text-gray-500  hover:cursor-pointer m-[2px] uppercase pl-0.5">{doctor.specialist}</p>  
                </div>
                <h5 class="font-bold text-lg my-1 font-[roboto] hover:cursor-pointer text-gray-900 hover:text-[#3fa7a7]" onClick={() => {navigate(`/assistant-doctors/${doctor.name}`, { replace: true })}}>{doctor.name}</h5>
              </div>
            </motion.div>
          ))
        }

      </div>
    </motion.div>
  )
}

export default Doctors;