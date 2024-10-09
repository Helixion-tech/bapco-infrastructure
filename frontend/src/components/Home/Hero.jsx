import React from 'react'
import { IoMdListBox } from "react-icons/io";
import { motion } from 'framer-motion';
import { SlideRight } from '../../utility/animation';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
        <section>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
                <div className='flex flex-col justify-center py-14 md:py-0'>
                    <div className='text-center md:text-left space-y-6'>
                        <motion.h1
                        variants={SlideRight(0.6)}
                        initial="hidden"
                        animate="visible"
                        className='text-3xl md:text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal text-white'>BAPCO INFRASTRUCTURE</motion.h1>
                        <motion.p
                        variants={SlideRight(1.2)}
                        initial="hidden"
                        animate="visible" className='text-sm text-slate-200 xl:max-w-[500px]'>Engineered for Dredging, Mining, Piling and Construction</motion.p>
                        <motion.div 
                        variants={SlideRight(1.5)}
                        initial="hidden"
                        animate="visible"className='flex justify-center items-center gap-8 md:justify-start'>
                            <Link to="/about"><button className='primary-btn flex items-center gap-2'>About us</button></Link>
                            <button className='flex justify-center items-center gap-2 hover:!scale-110 duration-300 font-semibold text-white'><IoMdListBox />Brochure</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero