import React from 'react'
import img1 from '../../assets/website/1.jpg';
import img2 from '../../assets/website/2.jpg';
import img3 from '../../assets/website/3.jpg';
import img4 from '../../assets/website/4.png';


const ClientData = [
    {
        id:1,
        img:img1,
        name:""
    },
    {
        id:2,
        img:img2,
        name:""
    },
    {
        id:3,
        img:img3,
        name:""
    },
    {
        id:4,
        img:img4,
        name:""
    },
]

const Clients = () => {
  return (
    <div className='container'>
        <div className='flex flex-col justify-center py-8 items-center xl:my-6 bg-slate-100 rounded-xl'>
            <div className='text-center py-2'>
                <h1 className='text-2xl lg:text-4xl font-bold'>Our Clients</h1>
                <p className='lg:pt-2 lg:text-sm text-xs font-medium text-blue-950 xl:max-w-[500px]'>Meet Our Happy Clients</p>
            </div>
            <div className='flex flex-row justify-center items-center gap-3 md:space-x-10'>
                { ClientData.map((data) => {
                    return(
                        <div className='max-w-[250px] py-4'>
                            <img  className="mix-blend-multiply xl:w-[200px]  lg:w-[150px] w-24" src={data.img} alt='client'/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Clients