import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import img1 from '../Images/lab-1.JPG'
import img2 from '../Images/lab-2.JPG'
import img3 from '../Images/doctor_group.JPG'

const images = [
    img1,
    img2,
    img3,
    // "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]

let count = 0;
let slideInterval;

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        startSlider();
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);
    
        return pauseSlider();
    }, [])
    

    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
      };

    const startSlider = () => {
        slideInterval = setInterval(()=>{
            handleOnNextClick()
        }, 3000)
    }

    const pauseSlider = () => {
        clearInterval(slideInterval);
      };

    const handleOnNextClick = () => {
        count = (count + 1) % images.length;
    setCurrentIndex(count);
    }
    const handleOnPrevClick = () => {
        const productsLength = images.length;
   count = (currentIndex + productsLength - 1) % productsLength;
   setCurrentIndex(count);
    }

    const slideRef = useRef();
    
  return (
    <div className="max-w-screen-xl">
        <div ref={slideRef} className='select-none relative'>
            <div className='aspect-w-16 aspect-h-9 h-[500px]'>
                <img src={images[currentIndex]} alt='OurImages' className='w-full h-[500px] ' />
            </div>

            <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-8 flex justify-between items-center'>
                <button className=" bg-gray-900/50 border border-gray-200 text-white p-1 rounded-full bg-opacity-100 cursor-pointer hover:bg-gray-700 transition" onClick={handleOnPrevClick} >
                    <AiOutlineVerticalRight size={25} />
                </button>
                <button className=" bg-gray-900/50 border border-gray-200 text-white p-1 rounded-full bg-opacity-100 cursor-pointer hover:bg-gray-700 transition" onClick={handleOnNextClick}>
                    <AiOutlineVerticalLeft size={25} />
                </button>
            </div>

        </div>
    </div>
  )
}

export default ImageSlider;