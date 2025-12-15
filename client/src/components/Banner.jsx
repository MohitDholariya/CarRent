import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { toast } from 'react-hot-toast'
import { motion } from 'motion/react'

const Banner = () => {

  const navigate = useNavigate()

  const isLoggedIn = Boolean(localStorage.getItem('token'))

  const handleListCarClick = () => {
    if (isLoggedIn) {
      toast.success('You can list your car')
      navigate('owner/add-car')
    } else {
      toast.error('Please login to list your car')
    }
  }


  return (
    <motion.div
     initial = {{ opacity: 0, y: 100 }}
     whileInView = {{ opacity: 1, y: 0 }}
     transition = {{ duration: 0.6 }}
    className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#ed5a05] to-[#f9b184] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>
      
      <div className='text-whites'>
        <h2 className='text-3xl font-medium'>Do You Own a Luxury Car?</h2>
        <p className='mt-2'>Monetize your vehicle effortlessly by listing it on CarRental.</p>
        <p className='max-w-130'>We take care of insurance, driver verification and secure payments — so you can earn passive income, stress-free.</p>

        <motion.button 
        whileHover = {{ scale: 1.05 }}
        whileTap = {{ scale: 0.95 }}
        onClick={handleListCarClick} className='px-6 py-2 bg-white hover:bg-slate-100 transition-all rounded-lg text-sm mt-4 cursor-pointer'>List your car</motion.button>
      </div>

      <motion.img 
      initial = {{ opacity: 0, x: 50 }}
      whileInView = {{ opacity: 1, x: 0 }}
      transition = {{ duration: 0.6, delay: 0.4 }}
      src={assets.banner_car_image} alt="banner-img" className='max-h-45 mt-10'/>
    </motion.div>
  )
}

export default Banner
