import React, { useState } from 'react'
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import img1 from "../../assets/website/aim.jpg"
import img2 from "../../assets/website/vision.jpg"
import img3 from "../../assets/website/history.jpg"
import aman from "../../assets/website/aman.jpg"

const paragraphStyles = {
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
}

const Aboutus = () => {
    const [aboutOpen,setAboutOpen] = useState(false)

  return (
    <>
    <div className='flex flex-col'>
        <div className='container flex flex-col items-start py-8 gap-4'>
            <div className='flex justify-center items-center'>
                <IoEllipsisVerticalOutline className='text-blue-600 xl:h-8 w-8 h-6'/>
                <h1 className='font-bold text-xl'>About BAPCO</h1>
            </div>
            <div className='flex flex-col gap-5 justify-start items-center ml-7'>
                <p className='text-sm md:text-base lg:text-base text-justify text-gray-900' style={aboutOpen ? null : paragraphStyles}>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Sed quis est sit amet sapien malesuada bibendum. 
                    Quisque et nisi urna. Orci varius natoque penatibus et magnis dis parturient montes, 
                    nascetur ridiculus mus. Maecenas vel metus tellus. In vestibulum mi leo, ac vulputate ligula porta id. 
                    Donec congue ipsum ac tempor faucibus. Vestibulum venenatis non nibh vel hendrerit. Aliquam eu vulputate dolor. 
                    Donec sollicitudin metus et sem ultrices commodo. Pellentesque sed ligula nec dui bibendum tempor.Aliquam ac luctus odio, 
                    in sagittis justo.Cras id rutrum nunc, nec semper massa. Ut semper porttitor erat, sed volutpat velit efficitur ac. 
                    Donec et sapien suscipit, ornare eros vel, mollis felis. Proin ligula ipsum, lacinia ullamcorper facilisis vitae, 
                    congue id turpis. Nam sit amet orci libero. Sed id augue consequat lectus laoreet tempor. Nam nec dolor a mauris sagittis eleifend id in lorem. 
                    Donec nec interdum erat. Donec euismod bibendum risus quis porta. Morbi eget enim in lectus congue imperdiet.
                   <p className='mt-4'>Lorem ipsum dolor sit amet, 
                   consectetur adipiscing elit. Sed quis est sit amet sapien malesuada bibendum. 
                   Quisque et nisi urna. Orci varius natoque penatibus et magnis dis parturient montes, 
                   nascetur ridiculus mus. Maecenas vel metus tellus. In vestibulum mi leo, ac vulputate ligula porta id. 
                   Donec congue ipsum ac tempor faucibus. Vestibulum venenatis non nibh vel hendrerit. Aliquam eu vulputate dolor. 
                   Donec sollicitudin metus et sem ultrices commodo. Pellentesque sed ligula nec dui bibendum tempor.Aliquam ac luctus odio, 
                   in sagittis justo.Cras id rutrum nunc, nec semper massa. Ut semper porttitor erat, sed volutpat velit efficitur ac. 
                   Donec et sapien suscipit, ornare eros vel, mollis felis. Proin ligula ipsum, lacinia ullamcorper facilisis vitae, 
                   congue id turpis. Nam sit amet orci libero. Sed id augue consequat lectus laoreet tempor. Nam nec dolor a mauris sagittis eleifend id in lorem. 
                   Donec nec interdum erat. Donec euismod bibendum risus quis porta. Morbi eget enim in lectus congue imperdiet.
                   </p>
                </p>
                <button className="font-semibold flex gap-2 items-center hover:!scale-105" onClick={() => setAboutOpen(!aboutOpen)}>
                    {aboutOpen ? 'Read Less'  : 'Read More'}
                    {aboutOpen ? <IoIosArrowUp/> : <IoIosArrowDown/>}
                </button>
            </div>
            <div className='flex justify-center items-center'>
                <IoEllipsisVerticalOutline className='text-blue-600 xl:h-8 w-8 h-6'/>
                <h1 className='font-bold text-xl'>History</h1>
            </div>
            <div className='flex flex-col gap-5 justify-start items-center ml-7'>
                <p className='text-sm md:text-base lg:text-base text-justify text-gray-900'>
                With over four decades of experience, our company has established itself as a leader in material handling and transportation services.
                We have successfully managed over-dimensional consignments for the Cochin Refinery Expansion and played a crucial role in the material handling for NTPC's Chepad Plant Project.
                As a handling contractor for Hindustan Newsprint in Kottayam, we facilitated the felling and transportation of reeds, bamboos, and eucalyptus from Kerala's forests. Additionally, 
                we have been instrumental in the clearing, forwarding, and transportation of fertilizers from Kayamkulam Railway Head to various depots in Travancore for FACT Udyogamandalam.
                Our long-standing commitment to excellence and reliability continues to drive our growth and success.
                </p>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <IoEllipsisVerticalOutline className='text-blue-600 xl:h-8 w-8 h-6'/>
                <h1 className='font-bold text-xl'>Vision</h1>
            </div>
            <div className='flex flex-col gap-5 justify-start items-center ml-7'>
                <p className='text-sm md:text-base lg:text-base text-justify text-gray-900'>
                With over four decades of experience, our company has established itself as a leader in material handling and transportation services.
                We have successfully managed over-dimensional consignments for the Cochin Refinery Expansion and played a crucial role in the material handling for NTPC's Chepad Plant Project.
                As a handling contractor for Hindustan Newsprint in Kottayam, we facilitated the felling and transportation of reeds, bamboos, and eucalyptus from Kerala's forests. Additionally, 
                we have been instrumental in the clearing, forwarding, and transportation of fertilizers from Kayamkulam Railway Head to various depots in Travancore for FACT Udyogamandalam.
                Our long-standing commitment to excellence and reliability continues to drive our growth and success.
                </p>
            </div>
        </div>

        <div className='bg-slate-500 min-h-[550px] items-center justify-center flex'>
            <div className='container flex xl:flex-row flex-col items-center justify-center gap-4'>
                <div className='xl:max-w-[600px] xl:h-[400px] bg-white border-2 m-10'>
                    <div className='flex flex-col lg:flex-row justify-between m-5 items-center gap-6'>
                        <div className='flex flex-col lg:w-[340px]'>
                            <h1 className='font-bold text-xl'>Chairman's</h1>
                            <span className='text-1xl font-semibold'>message</span>
                            <p className='text-xs mt-3'>At Bapco Infrastructure Pvt Ltd, our core strength lies in the strategic areas of dredging and mining, industries that are essential to shaping the future of infrastructure development. With a long-standing commitment to excellence, we have developed the expertise and resources necessary to execute large-scale projects with precision and reliability.By combining the latest technologies with our deep understanding of these industries, we deliver sustainable and efficient solutions that help drive the nation’s economic growth. Our focus on quality, safety, and innovation ensures that Bapco remains at the forefront of the dredging and mining sectors, contributing to the creation of sustainable infrastructure for generations to come.</p>
                        </div>
                        <div className='items-center w-48 text-center'>
                            <img className='h-[270px] w-48' src={aman} />
                            <h1 className='text-gray-800 font-semibold text-lg mt-3'>Mr.BABU PADIPPURACKAL</h1>
                        </div>
                    </div>
                </div>
                <div className='xl:max-w-[600px] xl:h-[400px] bg-white border-2 m-10'>
                    <div className='flex flex-col lg:flex-row justify-between m-5 items-center gap-6'>
                        <div className='flex flex-col lg:w-[340px]'>
                            <h1 className='font-bold text-1xl'>Managing Director's</h1>
                            <span className='text-1xl font-semibold'>message</span>
                            <p className='text-xs mt-3'>As the Managing Director of Bapco Infrastructure Pvt Ltd, I am proud to lead a company that consistently strives for excellence in the fields of dredging, mining, piling, and construction. At Bapco, our goal is to provide unmatched expertise and cutting-edge equipment for large-scale projects that demand precision, efficiency, and reliability.Our focus on dredging and mining allows us to contribute significantly to infrastructure development. With our advanced technology and skilled workforce, we provide efficient, high-performance solutions in these core industries, enabling the creation of waterways, ports, and resource extraction sites. Our dedication to safety, environmental responsibility, and client satisfaction is at the heart of everything we do.As we continue to grow, we remain committed to delivering sustainable, high-quality solutions that meet the evolving needs of our clients and the industry.</p>
                        </div>
                        <div className='items-center w-48 text-center'>
                            <img className='h-[270px] w-48' src={aman} />
                            <h1 className='text-gray-800 font-semibold text-lg mt-3'>AMAN PADIPPURACKAL</h1>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='container flex min-h-200 items-center justify-center py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='group relative items-center justify-center overflow-hidden hover:shadow-lg hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-108'>
                        <img src={img1} className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' />   
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 '></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white lg:mb-3 mb-6'>Courage</h1>
                        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity'>consectetur adipiscing elit. Sed quis est sit amet sapien malesuada bibendum. 
                        Quisque et nisi urna.</p>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden hover:shadow-lg hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-108'>
                        <img src={img2} className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' />   
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 '></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white lg:mb-3 mb-6'>Trust</h1>
                        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity'>consectetur adipiscing elit. Sed quis est sit amet sapien malesuada bibendum. 
                        Quisque et nisi urna.</p>
                    </div>
                </div>
                <div className='group relative items-center justify-center overflow-hidden hover:shadow-lg hover:shadow-black/30 transition-shadow'>
                    <div className='h-96 w-108'>
                        <img src={img3} className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' />   
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 '></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                        <h1 className='text-2xl font-bold text-white lg:mb-3 mb-6'>Commitment</h1>
                        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity'>consectetur adipiscing elit. Sed quis est sit amet sapien malesuada bibendum. 
                        Quisque et nisi urna.</p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    </>
  )
}

export default Aboutus