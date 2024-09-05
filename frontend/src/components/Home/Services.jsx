import React from 'react'
import dredging from "../../assets/website/dredging.png";
import mining from "../../assets/website/mining.png";
import piling from "../../assets/website/piling.png";
import construction from "../../assets/website/construction.png";
import { RiArrowRightSLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import { SlideLeft } from '../../utility/animation';


const ServiceData = [
    {
        id:1,
        title:"Dredging",
        desc:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed quis est sit amet sapien malesuada bibendum.Quisque et nisi urna. Orci varius natoque penatibus et magnis dis parturient montes.",
        img:dredging,
        delay:0.0,
    },
    {
        id:2,
        title:"Mining",
        desc:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed quis est sit amet sapien malesuada bibendum.Quisque et nisi urna. Orci varius natoque penatibus et magnis dis parturient montes.",
        img:mining,
        delay:0.3,
    },
    {
        id:3,
        title:"Piling",
        desc:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed quis est sit amet sapien malesuada bibendum.Quisque et nisi urna. Orci varius natoque penatibus et magnis dis parturient montes.",
        img:piling,
        delay:0.6,
    },
    {
        id:4,
        title:"Construction",
        desc:"Lorem ipsum dolor sit amet,consectetur adipiscing elit. Sed quis est sit amet sapien malesuada bibendum.Quisque et nisi urna. Orci varius natoque penatibus et magnis dis parturient montes.",
        img:construction,
        delay:0.9,
    },
    
]


const Services = () => {
  return (
    <div>
        <div className='container py-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center'>
                { ServiceData.map((item) => {
                    return(
                        <motion.div 
                        variants={SlideLeft(item.delay)}
                        initial="hidden"
                        whileInView="visible"
                        key={item.id}
                        className='flex flex-col justify-center items-center rounded-xl p-1 bg-slate-100 shadow-sm hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] hover:!scale-105'>
                            <img className="rounded-t-xl w-full h-full lg:h-40" src={item.img} alt='services' />
                            <h1 className='text-xl font-bold pt-5'>{item.title}</h1>
                            <p className='text-sm text-center m-3 text-gray-800 p-1'>{item.desc}</p>
                            <div className='flex justify-center items-center p-4'>
                                <p className='font-semibold md:text-sm lg:text-base'>More Details</p>
                                <RiArrowRightSLine />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Services