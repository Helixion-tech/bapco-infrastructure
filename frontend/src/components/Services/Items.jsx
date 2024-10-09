import React from 'react'
import mining from "../../assets/website/mining.png";
import piling from "../../assets/website/piling.png";
import dredging from "../../assets/website/dredging.png";
import construction from "../../assets/website/construction.png";
import aggregate from "../../assets/website/aggregate.jpg";
import equipments from "../../assets/website/equipments.jpg";

const Items = () => {
  return (
    <div>
        <div className='container'>
            <div className= 'grid grid-cols-1 xl:grid-cols-2 py-14 gap-8'>
                <img src={dredging} alt='project' className='w-[550px] rounded-2xl'/>
                <div className='flex flex-col justify-center text-center md:text-left lg:text-start space-y-4 xl:text-justify'> 
                    <p className='text-2xl lg:text-4xl font-bold capitalize'>
                        DREDGING
                    </p>
                    <p>
                    We offer industry-leading dredging services designed to keep waterways clear, safe, and fully operational. 
                    With our cutting-edge equipment and skilled teams, we ensure that harbors, shipping channels, and coastal areas maintain the required depth for vessels, 
                    preventing blockages and ensuring smooth marine traffic.
                    Our commitment to excellence guarantees that our dredging operations not only support the global shipping industry but also safeguard local fishing and tourism sectors.
                    By delivering efficient and reliable dredging services, we help prevent costly delays, minimize risks, and maintain the uninterrupted flow of goods and services through vital waterways.
                    </p>
                    <div>
                        <button className='border border-gray-700 hover:bg-blue-600 hover:text-white text-black font-semibold py-2 px-5 rounded-md'>Explore More</button>
                    </div>
                </div>
            </div>
            <div className='text-center py-6 border-t-2 border-slate-600/30'>
                <div className= 'grid grid-cols-1 xl:grid-cols-2 py-14 gap-8'>
                    <div className='flex flex-col justify-center text-center md:text-left lg:text-start space-y-4 xl:text-justify'> 
                        <p className='text-2xl lg:text-4xl font-bold capitalize'>
                            MINING
                        </p>
                        <p>
                        At our company, we provide top-tier sea mining services with a focus on efficiency, sustainability, and safety. 
                        Our advanced technology and expert teams ensure precise extraction of valuable minerals from the ocean floor, minimizing environmental impact while maximizing resource recovery.
                        We are committed to delivering reliable and cost-effective solutions, tailored to meet the specific needs of each project. 
                        With a strong emphasis on quality and innovation, our mining operations guarantee the best results,
                        ensuring that you receive the highest standard of service in the industry.
                        </p>
                        <div>
                            <button className='border border-gray-700 hover:bg-blue-600 hover:text-white text-black font-semibold py-2 px-5 rounded-md'>Explore More</button>
                        </div>
                    </div>
                    <img src={mining} alt='project' className='w-[550px] rounded-2xl'/>
                </div>
            </div>
            <div className='text-center py-6 border-t-2 border-slate-600/30'>
                <div className= 'grid grid-cols-1 xl:grid-cols-2 py-14 gap-8'>
                    <img src={aggregate} alt='project' className='w-[550px] rounded-2xl'/>
                    <div className='flex flex-col justify-center text-center md:text-left lg:text-start space-y-4 xl:text-justify'> 
                        <p className='text-2xl lg:text-4xl font-bold capitalize'>
                            AGGREGATE SUPPLY
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Cras vestibulum lacus quis neque pharetra facilisis. 
                        Nam tellus ante, congue id mattis at, interdum sit amet erat. 
                        Praesent porta, lectus eu condimentum congue, massa mauris mollis nisl, 
                        nec interdum enim justo et nisi. Mauris lobortis mattis nunc, sed facilisis velit molestie et. 
                        Phasellus fermentum arcu eu ullamcorper pellentesque. Integer tristique tortor lacus.
                        In ullamcorper velit nec neque venenatis condimentum
                        </p>
                        <div>
                            <button className='border border-gray-700 hover:bg-blue-600 hover:text-white text-black font-semibold py-2 px-5 rounded-md'>Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center py-6 border-t-2 border-slate-600/30'>
                <div className= 'grid grid-cols-1 xl:grid-cols-2 py-14 gap-8'>
                    <div className='flex flex-col justify-center text-center md:text-left lg:text-start space-y-4 xl:text-justify'> 
                        <p className='text-2xl lg:text-4xl font-bold capitalize'>
                            CONSTRUCTION
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Cras vestibulum lacus quis neque pharetra facilisis. 
                        Nam tellus ante, congue id mattis at, interdum sit amet erat. 
                        Praesent porta, lectus eu condimentum congue, massa mauris mollis nisl, 
                        nec interdum enim justo et nisi. Mauris lobortis mattis nunc, sed facilisis velit molestie et. 
                        Phasellus fermentum arcu eu ullamcorper pellentesque. Integer tristique tortor lacus.
                        In ullamcorper velit nec neque venenatis condimentum
                        </p>
                        <div>
                            <button className='border border-gray-700 hover:bg-blue-600 hover:text-white text-black font-semibold py-2 px-5 rounded-md'>Explore More</button>
                        </div>
                    </div>
                    <img src={construction} alt='project' className='w-[550px] rounded-2xl'/>
                </div>
            </div>
            <div className='text-center py-6 border-t-2 border-slate-600/30'>
                <div className= 'grid grid-cols-1 xl:grid-cols-2 py-14 gap-8'>
                    <img src={piling} alt='project' className='w-[550px] rounded-2xl'/>
                    <div className='flex flex-col justify-center text-center md:text-left lg:text-start space-y-4 xl:text-justify'> 
                        <p className='text-2xl lg:text-4xl font-bold capitalize'>
                            PILING
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Cras vestibulum lacus quis neque pharetra facilisis. 
                        Nam tellus ante, congue id mattis at, interdum sit amet erat. 
                        Praesent porta, lectus eu condimentum congue, massa mauris mollis nisl, 
                        nec interdum enim justo et nisi. Mauris lobortis mattis nunc, sed facilisis velit molestie et. 
                        Phasellus fermentum arcu eu ullamcorper pellentesque. Integer tristique tortor lacus.
                        In ullamcorper velit nec neque venenatis condimentum
                        </p>
                        <div>
                            <button className='border border-gray-700 hover:bg-blue-600 hover:text-white text-black font-semibold py-2 px-5 rounded-md'>Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center py-6 border-t-2 border-slate-600/30'>
                <div className= 'grid grid-cols-1 xl:grid-cols-2 py-14 gap-8'>
                    <div className='flex flex-col justify-center text-center md:text-left lg:text-start space-y-4 xl:text-justify'> 
                        <p className='text-2xl lg:text-4xl font-bold capitalize'>
                            HEAVY EQUIPMENTS
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Cras vestibulum lacus quis neque pharetra facilisis. 
                        Nam tellus ante, congue id mattis at, interdum sit amet erat. 
                        Praesent porta, lectus eu condimentum congue, massa mauris mollis nisl, 
                        nec interdum enim justo et nisi. Mauris lobortis mattis nunc, sed facilisis velit molestie et. 
                        Phasellus fermentum arcu eu ullamcorper pellentesque. Integer tristique tortor lacus.
                        In ullamcorper velit nec neque venenatis condimentum
                        </p>
                        <div>
                            <button className='border border-gray-700 hover:bg-blue-600 hover:text-white text-black font-semibold py-2 px-5 rounded-md'>Explore More</button>
                        </div>
                    </div>
                    <img src={equipments} alt='project' className='w-[550px] rounded-2xl'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Items