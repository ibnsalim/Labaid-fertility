import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {data} from '../../data'
import { motion } from 'framer-motion'
// import Treatments from '../Treatments/Treatments';

const About = () => {

  let FullArray = [ ];
    for (let key in data){
      if ( key < 15){ 
        FullArray.push(data[key])
      }
    }
  return (
    <motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0, transition: {duration: 0.1} }}>
      <div className='relative aspect-w-16 aspect-h-9'>
        <img  src='https://images.pexels.com/photos/11119419/pexels-photo-11119419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'alt='Docotr Group Photos' className='w-full h-[450px] bg-fixed
         '/> 
        <div className='absolute inset-0 bg-gray-800 bg-opacity-30 '></div>
        
        <div class="absolute top-0 flex justify-center items-center w-full h-full ">        
          <h1 class="font-semibold  text-4xl mb-3 font-[roboto] text-white m-6 hover:scale-105">OUR HONORABLE DOCTORS</h1>
        </div>
      </div>

      <div>
        {/* Labaid fertility center */}
          <div className='mt-20'>
          <p className='sm:text-3xl md:text-4xl font-semibold text-gray-700 text-center mb-4 uppercase'>Labaid fertility center</p>
          <div className='grid grid-cols-5'>
              <div className='col-span-1'></div>
              <div className='col-span-3 mt-4 space-y-5 flex flex-col justify-center items-center'>
                  <p className='text-center'>Infertility is a major medical and social problem. Infertility is a condition of reproductive system that impairs the ability to conceive children. To the couples experiencing it, there can be nothing more devastating than infertility. A variety of complicated factors determine whether a couple can successfully conceive. Approximately 50 percent of them related to female, 30 percent to male and 20 percent to both partners have the problem and need evaluation. Infertility affects one out of every eight couples. <br /><br />
                  Many of these couples undergo years of repeated tests and treatments, moving from one place to another in the hope of having a baby. Infertile couples needs proper guidance and counseling as regards to the cause of infertility and its appropriate management.</p>
                  <button className='flex justify-center text-md font-semibold text-gray-700 tracking-wider mt-4 p-2 hover:cursor-pointer hover:scale-105'>Learn more <HiArrowNarrowRight className="text-gray-700 text-sm mt-1.5 ml-1" />
                  </button>
              </div>
              <div className='col-span-1'></div>
          </div>

        </div>
        
          {/* Our happy moments */}
          <div className='mt-10 mb-6 text-center pt-5'>
            <p className='text-3xl text-gray-900 font-bold'>OUR HAPPY MOMENTS</p>
          </div >

          <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>
                        {/* Big Image Post */}
            {
              FullArray.map((item, i)=>(
                <div class="relative overflow-hidden bg-no-repeat bg-cover hover:brightness-105" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <img src={item.src} alt={item.alt} class="w-full h-auto bg-gray-900 " />
                  
                </div>
              ))
            }
          </div>

        <div>
        </div>
      </div>

    </motion.div>
  )
}

export default About