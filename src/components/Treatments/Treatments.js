import React from 'react';
import {data} from '../../data';
import { motion } from 'framer-motion';

const Treatments = () => {
  let FullArray = [ ];
    for (let key in data){
      if ( key < 10){ 
        FullArray.push(data[key])
      }
    }
  return (
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0, transition: {duration: 0.1} }}>
      <div className='mt-10 mb-6 text-center'>
        <p className='text-3xl text-[#369e9e] font-semibold'>What We Do</p>
      </div >

      <div class="relative rounded-b-sm w-auto h-auto pb-1 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-5 gap-x-3">
                {
                    FullArray.map((item, i) =>(
                    <div key={i} className='shadow-lg hover:drop-shadow-md ring-1 ring-gray-200 bg-gray-50 hover:cursor-pointer'>
                        <div class="relative overflow-hidden bg-no-repeat bg-cover "
                            data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img src={item.src} alt='' class="w-full h-40" />
                            <a href="/">
                              <div
                                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                                ></div>
                            </a>
                        </div>

                        <div class="pl-2 pt-3">
                            <h5 class="font-bold text-lg my-1 font-[roboto] hover:cursor-pointer text-gray-900 hover:underline">{item.title}</h5>
                        </div>
                    </div>
                    ))
                }

            </div>

      <div>
      </div>
    </motion.div>
  )
}

export default Treatments;