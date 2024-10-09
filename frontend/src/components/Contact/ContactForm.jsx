import React, { useState } from 'react'
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiFacebookCircleFill,RiInstagramFill,RiWhatsappFill } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import Swal from 'sweetalert2'


const ContactForm = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "1c77378d-d268-4c3a-b435-03837b7702b8");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


  return (
    <div className='container'>
        <div className='flex w-full justify-center items-center'>
            <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white'>
                <div className='flex flex-col justify-between space-y-8 lg:max-w-[400px] md:max-w-[250px]'>
                    <div>
                        <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                        <p className='pt-2 text-cyan-100 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Cras vestibulum lacus quis neque pharetra facilisis.</p>
                        <div className='flex flex-row items-center pt-5'>
                            <button className='self-end bg-cyan-900 text-white font-bold rounded-lg px-6 py-2 flex items-center gap-2 duration-200 hover:!scale-105'>
                                <p>More Info </p> 
                                <RiArrowRightSLine /> 
                            </button>             
                        </div>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        <div className='inline-flex space-x-2 items-center'>
                            <IoCallSharp className='text-teal-300 text-xl'/>
                            <span>9595959595</span>
                        </div>
                        <div className='inline-flex space-x-2 items-center'>
                            <IoMdMail className='text-teal-300 text-xl'/>
                            <span>office@bapco.in</span>
                        </div>
                        <div className='inline-flex space-x-2 items-center'>
                            <FaLocationDot className='text-teal-300 text-xl'/>
                            <span>Alappuzha</span>
                        </div>
                    </div>
                    <div className='flex space-x-4 text-lg'>
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
                <div className='bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80]'>
                    <form action='' onSubmit={onSubmit} className='flex flex-col space-y-4'>
                        <div>
                            <label className='text-sm'>Your Name</label>
                            <input type="text" placeholder="Your name" required name="Name" className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
                        </div>
                        <div>
                            <label className='text-sm'>Email Address</label>
                            <input type="email" placeholder="Email Address" required name="Email" className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
                        </div>
                        <div>
                            <label className='text-sm'>Message</label>
                            <textarea placeholder="Message" rows="4" required name="Message" className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300' />
                        </div>
                        <button type="submit" className='inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase duration-200 hover:!scale-105'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm