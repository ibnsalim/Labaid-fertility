import React from 'react'
import {useParams} from 'react-router-dom'

const navData = [
  {menu:"Education", id:"/"},
  {menu:"Service", id:"/"},
  {menu:"Experience", id:"/"},
  {menu:"Researches", id:"/"},
  {menu:"Publications", id:"/"},
]

const DoctorDetails = () => {
  const { name } = useParams()

  return (
    <div className='mt-6'>
      <div className='grid grid-cols-5 gap-x-3'>
        {/* Side bar Start */}
        <aside className='col-span-1 bg-[#078c8c] overflow-y-auto h-auto pb-4 sticky top-0' aria-label='Sidebar'>
          <div className='flex justify-center py-3 mt-6'>
            <img src='https://hopeinfertilitycentrebd.com/wp-content/uploads/2019/12/Doctor-Mariam.jpg' alt='Doctors Picture' className='w-28 h-28 border-4 border-[#66cccc] rounded-full brightness-110' />
          </div>

          <div className=' px-4 py-3 justify-items-center mt-6'>
            {
              navData.map((nav, i)=>(
                <ul key={i} className='list-none '>
                  <a href={nav.id}>
                    <p className='p-[5px] text-lg text-white hover:rounded-sm hover:bg-[#037e7e] hover:cursor-pointer' >{nav.menu}</p>
                  </a>
                </ul> 
              ))
            }
            </div>

        </aside>
        {/* Side bar End */}
        
        <div className='col-span-4 '><p className="text-4xl font-semibold text-center">{name}</p></div>
      </div>
    </div>
  )
}

export default DoctorDetails;