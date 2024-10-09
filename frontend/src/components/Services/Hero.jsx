import React from 'react'


const Hero = () => {
  return (
    <>
        <section>
            <div className='container grid grid-cols-1 min-h-[450px] relative'>
                <div className='flex justify-center items-center py-14 md:py-0'>
                    <div className='flex flex-col text-center justify-center space-y-2 items-center'>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed xl:leading-normal text-white'>
                            SERVICES
                        </h1>
                        <p className='text-sm text-slate-100 xl:max-w-[500px]'>Powering progress with strong machines</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero