import React from 'react'
import {BsTelephoneInboundFill} from 'react-icons/bs';
import {FaCalendarAlt} from 'react-icons/fa'
import {FaLocationArrow} from 'react-icons/fa';
import { motion } from 'framer-motion';

const GetAppointment = () => {
  return (
    <motion.div className='mt-14 space-y-12 mb-12'>
        <p className='text-4xl font-semibold text-gray-700 text-center mb-4'>For Appointment</p>
        <div className='grid grid-cols-3 gap-x-10 mb-6 '>
            
            {/* Item-1 */}
            <div className=' shadow-lg rounded-md flex flex-col justify-center items-center h-44 space-y-3 bg-[#66cccc] hover:text-white hover:scale-105 hover:duration-200'>
                <BsTelephoneInboundFill className='' size={40}/>
                <p className='font-semibold text-2xl'>01842-081088</p>
            </div>

            {/* Item-2 */}
            <div className=' shadow-lg rounded-md flex flex-col justify-center items-center h-44 space-y-3 bg-[#66cccc] hover:text-white hover:scale-105 hover:duration-200'>
                <FaCalendarAlt className='' size={40}/>
                <p className='font-semibold text-2xl'>9AM To 5PM</p>
            </div>

            {/* Item-3 */}
            <div className=' shadow-lg rounded-md flex flex-col justify-center items-center h-44 space-y-3 bg-[#66cccc] hover:text-white hover:scale-105 hover:duration-200'>
                <FaLocationArrow className='' size={40}/>
                <p className='font-semibold text-2xl'>House-06 Rd 04, Dhaka 1205</p>
            </div>

    
        </div>

    </motion.div>
  )
}

export default GetAppointment;