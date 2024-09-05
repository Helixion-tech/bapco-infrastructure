import React from 'react'
import { IoMdListBox } from "react-icons/io";

const Hero = () => {
  return (
    <>
        <section>
            <div className='container grid grid-cols-1 min-h-[450px] relative'>
                <div className='flex justify-center items-center py-14 md:py-0'>
                    <div className='flex flex-col text-center justify-center space-y-6 items-center'>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed xl:leading-normal text-white'>
                            BAPCO INFRASTRUCTURE <span className='text-2xl font-medium '>Private Limited</span>
                        </h1>
                        <p className='text-sm text-slate-200 xl:max-w-[500px]'>Engineered for Dredging, Mining, Piling and Construction</p>
                        <div className='flex justify-center items-center gap-8'>
                            <h1 className='justify-center items-center font-semibold text-white'>Download</h1>
                            <button className='primary-btn flex items-center gap-2'><IoMdListBox />Brochure</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero