import React from 'react';
import ImageSlider from '../components/Home/ImageSlider';
import Aboutus from '../components/Home/Aboutus';
import Doctors from '../components/Home/Doctors';
import GetAppointment from '../components/Home/GetAppointment';
import Treatments from '../components/Treatments/Treatments';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    exit={{ opacity:0 }}
    >
        <ImageSlider />
        <Aboutus />
        <Doctors />
        <Treatments />
        <GetAppointment />
    </motion.div>
  )
}

export default Home