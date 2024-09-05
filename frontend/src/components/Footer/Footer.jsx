import React from 'react'
import logo from '../../assets/website/logo1.png'
import { RiFacebookCircleFill,RiInstagramFill,RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-gray-950 rounded-t-3xl mt-10'>
        <div className='container'>
            <div className='grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10'>
                <div className='py-8 px-4 space-y-4'>
                    <div className='text-2xl flex items-center gap-2 font-bold uppercase text-white'>
                        <img src={logo} width="30px"/>
                        <h1>BAPCO</h1>
                    </div>
                    <p className='text-white text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam viverra vehicula. Nullam tincidunt.
                    </p>
                    <div>
                    <button className='text-2xl text-white hover:text-orange-600 rounded-full p-2 duration-200 hover:!scale-110'>
                        <RiInstagramFill />
                    </button>
                    <button className='text-2xl text-white hover:text-blue-900 rounded-full p-2 duration-200 hover:!scale-110'>
                        <RiFacebookCircleFill />
                    </button>
                    <button className='text-2xl text-white hover:text-green-600 rounded-full p-2 duration-200 hover:!scale-110'>
                        <RiWhatsappFill />
                    </button>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14 text-white'>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <a href='#'>Home</a>
                            </li>
                            <li>
                                <a href='#'>About</a>
                            </li>
                            <li>
                                <a href='#'>Services</a>
                            </li>
                            <li>
                                <a href='#'>Projects</a>
                            </li>
                            <li>
                                <a href='#'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>Company Links</h1>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <a href='#'>Our Services</a>
                            </li>
                            <li>
                                <a href='#'>Contact Us</a>
                            </li>
                            <li>
                                <a href='#'>Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>Resources</h1>
                        <ul className='flex flex-col gap-3'>
                            <li>
                                <a href='#'>Equipments</a>
                            </li>
                            <li>
                                <a href='#'>Tools</a>
                            </li>
                            <li>
                                <a href='#'>Works</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center py-6 border-t-2 border-gray-300/10'>
                <span className='text-sm text-gray-300 opacity-70'>
                    @copyright 2024 | Helixion 
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer