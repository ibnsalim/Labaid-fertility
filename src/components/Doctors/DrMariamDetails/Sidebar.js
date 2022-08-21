import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ navData }) => {
  
  return (
    <div>
        {/* Side bar Start */}
        <aside className=' bg-[#078c8c] h-screen overflow-y-auto pb-4 sticky top-0' aria-label='Sidebar'>
          <div className='flex justify-center py-3 mt-6'>
            <img src='https://hopeinfertilitycentrebd.com/wp-content/uploads/2019/12/Doctor-Mariam.jpg' alt='Doctors Picture' className='w-28 h-28 border-4 border-[#66cccc] rounded-full brightness-110' />
          </div>

          <div>
          <ul className=' px-4 py-3 flex flex-col justify-center items-center mt-6'>
            {
              navData.map((nav, i)=>(
                <NavLink to='' key={i} className='flex flex-col'>
                    {({ isActive })=>( 
                        <p className={
                            isActive ? 'p-[5px] text-lg text-white hover:rounded-sm hover:cursor-pointer active:bg-gray-300':
                            'p-[5px] text-lg text-white hover:rounded-sm hover:cursor-pointer'} >
                            {nav.menu}
                        </p>
                    )}
                </NavLink> 
              ))
            }
            </ul>
            </div>

        </aside>
        {/* Side bar End */}

    </div>
  )
}

export default Sidebar