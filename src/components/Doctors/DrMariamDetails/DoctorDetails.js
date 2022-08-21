import React from 'react'
import { motion } from 'framer-motion'
import {useParams} from 'react-router-dom'
import Sidebar from './Sidebar'

const navData = [
  {menu:"Education", id:""},
  {menu:"Service", id:""},
  {menu:"Experience", id:""},
  {menu:"Researches", id:""},
  {menu:"Publications", id:""},
]

const DoctorDetails = () => {
  const { name } = useParams()

  return (
    <motion.div 
    className='mt-6'
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0, transition: {duration: 0.1} }}
    >
      <div className='grid grid-cols-5 gap-x-3'>
        {/* Side bar Start */}
        <div className='col-span-1 '>
          <Sidebar navData={navData}/>
          
        </div>
        {/* Side bar End */}
        
        <div className='col-span-4 '><p className="text-4xl font-semibold text-center">{name}</p></div>
      </div>
    </motion.div>
  )
}

export default DoctorDetails;