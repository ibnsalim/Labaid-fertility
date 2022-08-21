import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom';
import { doctor_info } from '../../data';

const AssDoctorDetails = () => {
    const { name } = useParams()
    const [data, setData] = useState([]);
    useEffect(()=>{
        const Data = doctor_info.filter((doctor)=>doctor.name===name);
        setData(Data)
    }, [doctor_info])

  return (
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0, transition: {duration: 0.1} }}
    >
        <div >
            {
                data.map((doctor, index) => (
                    <div key={index} className='grid grid-cols-2 w-[600px] h-auto md:w-[700px] md:h-[450px] lg:w-[800px] lg:h-[500px] mx-auto bg-gray-200 shadow-xl'>
                        <div className='bg-white '>
                            <img src={doctor.src} alt='doctor-1' className='h-[500px] w-full' />
                        </div>
                        
                        <div className='bg-gray-800 h-[500px]'>
                            <div className='mx-8 my-10 space-y-3'>
                            <div>
                                <p className='text-lg text-[#66cccc]'>Profile</p>
                                <h1 className='text-xl lg:text-2xl font-semibold text-gray-50'>{doctor.name}</h1>
                                <p className='text-sm md:text-md text-gray-200 mt-1'>{doctor.degree}</p>
                                <p className='text-md text-gray-200 mt-1'>Labaid fertility center,</p>
                                <p className='text-md text-gray-200 mt-1'>Dhanmondi, Dhaka.</p>
                            </div>

                            <div className=''>
                                <p className='text-lg text-[#66cccc] '>Specialty</p>
                                <div className='space-x-2 flex flex-wrap'>
                                <p className='text-md text-gray-100 '>{doctor.specialist}</p>
                                
                                </div>
                            </div>
                            <div>
                                <p className='text-lg text-[#66cccc]'>Experience</p>
                                <p className='text-md text-gray-200 mt-0.5'>{doctor.experience}</p>
                            </div>

                            <div className=''>
                                <p className='text-lg text-[#66cccc]'>Address</p>
                                <p className='text-md text-gray-200 mt-0.5'>Labaid fertility center,</p>
                                <p className='text-md text-gray-200 mt-0.5'>Location: Mirpur road, Dhanmondi, Dhaka</p>
                            </div>
                            </div>
                        </div>
                    </div>
          ))
        }
            
        </div>

    </motion.div>
  )
}

export default AssDoctorDetails