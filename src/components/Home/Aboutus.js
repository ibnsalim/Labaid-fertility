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
    className='mt-20'>
        <p className='text-4xl font-semibold text-gray-700 text-center mb-4'>Who We Are?</p>
        <div className='grid grid-cols-5'>
            <div className='col-span-1'></div>
            <div className='col-span-3 mt-4 space-y-5 flex flex-col justify-center items-center'>
                <p className='text-center'>Infertility is a major medical and social problem. Infertility is a condition of reproductive system that impairs the ability to conceive children. To the couples experiencing it, there can be nothing more devastating than infertility. A variety of complicated factors determine whether a couple can successfully conceive. Approximately 50 percent of them related to female, 30 percent to male and 20 percent to both partners have the problem and need evaluation. Infertility affects one out of every eight couples. <br /><br />
                Many of these couples undergo years of repeated tests and treatments, moving from one place to another in the hope of having a baby. Infertile couples needs proper guidance and counseling as regards to the cause of infertility and its appropriate management.</p>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className='flex justify-center text-md font-semibold rounded-full px-4 text-gray-100 bg-[#369b9b] tracking-wider mt-7 p-2 shadow-lg hover:cursor-pointer ' onClick={() => {navigate(`/doctors`, { replace: true })}}>Learn More <HiArrowNarrowRight className="text-gray-100 text-sm mt-1.5 ml-1" />
                  </motion.button>
            </div>
            <div className='col-span-1'></div>
        </div>

    </motion.div>
  )
}

export default Aboutus;