import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import img from './image/logo.png'

function Footer() {
  return (
    <div>
        <footer class="max-w-full mx-auto text-white bg-[#e7ffff] mt-12">
          <div className='2xl:max-w-7xl xl:max-w-6xl md:max-w-5xl mx-auto'>
            <div className='pt-16'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-0 mx-5 sm:m-0'>

                {/* Colamn-1 */}
                <div className=' sm:justify-between'>
                  <div className='flex flex-col gap-y-4 '>
                    <img src={img} className='sm:w-60 w-56' />
                    <div class="flex justify-start mb-5 mt-3">
                      <a href="#" class="mr-2 border border-gray-300 hover:border-[#4267B2] p-4 rounded-sm text-gray-700 hover:text-[#4267B2] hover:drop-shadow-md"><FaFacebook size={25}/></a>
                      <a href="#" class="mr-2 border border-gray-300 hover:border-[#1DA1F2] p-4 rounded-sm text-lg text-gray-700 hover:text-[#1DA1F2] hover:drop-shadow-md"><FaTwitter size={25} /></a>
                      <a href="#" class="mr-2 border border-gray-300 hover:border-blue-800 p-4 rounded-sm text-lg text-gray-700 hover:text-blue-800 hover:drop-shadow-md"><FaLinkedin size={25} /></a>
                      <a href="#" class="mr-2 border border-gray-300 hover:border-[#F77737] p-4 rounded-sm text-lg text-gray-700 hover:text-[#F77737] hover:drop-shadow-md"><FaInstagram size={25} /></a>
                      <a href="#" class="mr-2 border border-gray-300 hover:border-[#FF0000] p-4 rounded-sm text-lg text-gray-700 hover:text-[#FF0000] hover:drop-shadow-md"><FaYoutube size={25} /></a>
                    </div>
                  </div>
                </div>

                {/* Colamn-2 */}
                <div className='flex flex-col sm:justify-between gap-y-4 mr-5'>
                  <div>
                    <span className='border-l-2 border-l-gray-500 text-xl font-semibold pl-2 text-gray-700'>Navigate</span>
                    <div className='mt-4'>
                      <ul>
                        <li className='text-gray-700 text-md font-normal py-2 border-b border-t border-gray-300 hover:cursor-pointer '><a href='/' className='hover:text-gray-500'>Home</a></li>
                        <li className='text-gray-700 text-md font-normal py-2 border-b border-gray-300 hover:cursor-pointer'><a href='/about' className='hover:text-gray-500'>About</a></li>
                        <li className='text-gray-700 text-md font-normal py-2 border-b border-gray-300 hover:cursor-pointer'><a href='/doctors' className='hover:text-gray-500'>Doctors</a></li>
                        <li className='text-gray-700 text-md font-normal py-2 border-b border-gray-300 hover:cursor-pointer'><a href='/treatments' className='hover:text-gray-500'>Treatments</a></li>
                        <li className='text-gray-700 text-md font-normal py-2 border-b border-gray-300 hover:cursor-pointer'><a href='/contact' className='hover:text-gray-500'>Contact</a></li>
                      </ul>
                    </div>
                  </div>
                  

                </div>

                {/* Colamn-3 */}
                <div className='flex flex-col justify-between mt-2 sm:mt-0 sm:ml-5 ml-0'>
                  <div>
                    <div className='border-l-2 border-l-gray-500 text-xl font-semibold pl-2 text-gray-700'>Contact With Us</div>
                      <div className='flex flex-col'>
                        <span className='text-gray-700 text-md font-normal'>Labaid fertility center, Dhanmondi, Dhaka-1212</span>
                        <span className='text-gray-700 text-md font-normal'>M : +880 1744-440882</span>
                        <span className='text-gray-700 text-md font-normal'>E : labaidfertility@gmail.com</span>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-700 w-full h-auto mt-12 py-5 flex flex-col justify-center'>
            <div className='flex justify-center items-center align-middle'>
              <span className='text-gray-200 text-md sm:text-lg font-normal ' >Privacy Policy&nbsp;|</span><vr />
              <span className='text-gray-200 text-md sm:text-lg font-normal '>&nbsp;Refund Policy&nbsp;|</span>
              <span className='text-gray-200 text-md sm:text-lg font-normal '>&nbsp;Terms & Conditions</span>
            </div>
            <div className='flex justify-center items-center align-middle'>
              <span className='text-gray-400 text-sm sm:text-md font-normal  ' >Copyright&copy;2022&nbsp;|</span><vr />
              <span className='text-gray-400 text-sm sm:text-md font-normal '>&nbsp;Medbit Technology. All rights reserved</span>
            </div>

          </div>
        </footer>
     
    </div>
  )
}

export default Footer;


