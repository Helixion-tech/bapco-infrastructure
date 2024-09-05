import React from 'react'
import { motion,AnimatePresence } from 'framer-motion';
import { RiFacebookCircleFill,RiInstagramFill,RiWhatsappFill } from "react-icons/ri";

const ResponsiveMenu = ({open}) => {
  return(
    <AnimatePresence mode='wait'>
    {
        open && (
            <motion.div
            initial={{ opacity:0, y:-100 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, y:-100 }}
            transition={{ duration:0.3 }}
            className='absolute top-20 left-0 w-full h-screen z-20'
            >
            <div className='text-xl font-semibold bg-blue-700 text-white py-10 m-6 rounded-3xl '>
                <ul className='flex flex-col justify-center items-center gap-10 mb-12'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <ul className='flex flex-row justify-center items-center gap-20 text-2xl'>
                    <li className='hover:text-orange-600'><RiInstagramFill /></li>
                    <li className='hover:text-blue-900'><RiFacebookCircleFill /></li>
                    <li className='hover:text-green-600'><RiWhatsappFill /></li>
                </ul> 
            </div>  
            </motion.div>
        )
    }
  </AnimatePresence>
)}

export default ResponsiveMenu