import React from 'react';
import GetAppointment from '../Home/GetAppointment';
import {motion} from 'framer-motion'

const Contact = () => {

  return (
    <motion.div className='mt-6'
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0, transition: {duration: 0.1} }}
    >
        <form action="#" class="mb-6 w-[700px] mx-auto mt-10">
          <div className='grid grid-cols-2 gap-x-6'>
          <div class="mb-6">
            <label for="name" class="block mb-2 text-lg font-semibold text-gray-900 dark:text-gray-300 ">Your Full Name</label>
            <input type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Enter your name" required />
          </div>

          <div class="mb-6">
            <label for="email" class="block mb-2 text-lg font-semibold text-gray-900 dark:text-gray-300 ">Your Email</label>
            <input type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="abc@mail.com" />
          </div></div>

          <div class="mb-6">
            <label for="phone" class="block mb-2 text-lg font-semibold text-gray-900 dark:text-gray-300 ">Your Phone No.</label>
            <input type="text" name="phone" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="017xxxxxxxx" required />
          </div>

          <div class="mb-6">
            <label for="message" class="block mb-2 text-lg font-semibold text-gray-900 dark:text-gray-400 ">Comments</label>
            <textarea id="message" rows="4" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Your message..."></textarea>
          </div>
          <button className='flex justify-center text-md font-semibold rounded-full px-4 text-white bg-[#369b9b] tracking-wider mt-4 p-2 shadow-lg hover:cursor-pointer hover:bg-[#269797]' >Send Massage
        </button>
      </form>

      <div>
        <GetAppointment />
      </div>
    </motion.div>
  )
}

export default Contact