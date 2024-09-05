import React, { useState } from 'react'
import { NavbarMenu } from '../../mockData/data'
import { RiFacebookCircleFill,RiInstagramFill,RiWhatsappFill } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import logo from '../../assets/website/logo1.png'
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  const [open,setOpen] = useState(false);
  return (
    <>
      <nav>
          <div className='container flex justify-between items-center py-8'>

              {/* {logo section} */}
              <div className='text-xl flex items-center gap-1 font-bold uppercase text-white'>
                <img src={logo} width="30px"/>
                <h1>BAPCO</h1>
              </div>

              {/* {menu section} */}
              <div className='hidden md:block'>
                <ul className='flex items-center gap-8 text-white'>
                  {NavbarMenu.map((item) => {
                    return(
                      <li key={item.id}>
                        <a href={item.link} className={`text-white ${
                location.pathname === item.link
                  ? 'border-b-2 border-white pb-1'
                  : ''
              }`}>{item.title}</a>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* {icons section} */}
              <div className='hidden md:block'>
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

              {/* {Mobile hamburger menu section} */}
              <div className='md:hidden'>
                  <MdMenu className="text-4xl text-white" onClick={() => setOpen(!open)}/>
              </div>    
          </div>
      </nav>

      {/* {mobile sidebar section} */}
      <ResponsiveMenu open={open}/>
    </>


  )
}

export default Navbar