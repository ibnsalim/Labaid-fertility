import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import img from "./image/logo.png"
const Navmenu = [
    {nav:"HOME", href:'/'},
    {nav:"ABOUT", href:'/about'},
    {nav:"DOCTORS", href:'/doctors'},
    {nav:"TREATMENTS", href:'/treatments'},
    {nav:"CONTACT", href:'/contact'},
]

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='sticky top-0 z-50'>
        <nav className='bg-white mb-3  '>
            <div className='max-w-full h-auto mx-auto shadow'>
                <div className='2xl:max-w-7xl xl:max-w-6xl md:max-w-5xl mx-auto flex justify-between '>

                    <div className='w-full flex justify-between items-center'>

                        <div className='flex items-center'>
                            <a href='/' className=' font-bold text-gray-700 p-2 text-3xl'><img className='w-[180px]' src={img} alt='logo' /></a>
                        </div>

                        <div className=''>
                            <ul className='flex justify-center space-x-2'> 
                                {
                                    Navmenu.map((item, i)=>(
                                        <NavLink to={item.href} key={i} className='flex py-3  text-gray-900  hover:cursor-pointer '>
                                            {({ isActive })=>(
                                                <p className={
                                                    isActive ? 'bg-gray-300/40 text-[15px] font-semibold tracking-wide hover:bg-gray-300/40 px-3 py-2 hover:rounded-sm' : 'text-[15px] font-semibold tracking-wide hover:bg-gray-300/40 px-3 py-2 hover:rounded-sm'
                                                }>{item.nav}</p>
                                            )}
                                        </NavLink>
                                    ))
                                }   
                            </ul>
                        </div>

                    </div>

                    {/* Hamburger menu */}

                    <div onClick={handleNav} className='block md:hidden'>
                        {nav ? <AiOutlineClose size={30} className='text-gray-900' /> : <AiOutlineMenu size={30} className='text-gray-900' />}
                    </div>
       
                    {/* Mobile menu */}
                    <div className= {nav ? ' w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>

                    <ul className='flex justify-center space-x-2'> 
                                {
                                    Navmenu.map((item, i)=>(
                                        <NavLink to={item.href} key={i} className=' py-3  text-gray-900 hover:cursor-pointer '>

                                            {({ isActive })=>(
                                                <p className={
                                                    isActive ? 'bg-gray-300/40 text-[15px] font-semibold tracking-wide hover:bg-gray-300/40 px-3 py-2 hover:rounded-sm' : 'text-[15px] font-semibold tracking-wide hover:bg-gray-300/40 px-3 py-2 hover:rounded-sm'
                                                }>{item.nav}</p>
                                            )}
                                        </NavLink>
                                    ))
                                }   
                            </ul>
                    </div>


                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar;


