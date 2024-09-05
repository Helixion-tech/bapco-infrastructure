import React from 'react'
import img from "../../assets/website/product.png"

const Products = () => {
  return (
    <div>
        <div className='container'>
            <div className= 'grid grid-cols-1 xl:grid-cols-2 py-14'>
                <div>
                    <img src={img} alt='project' className='w-auto h-full object-cover py-6'/>
                </div>
                <div className='flex flex-col justify-center text-center md:text-left lg:text-start space-y-4 xl:text-justify'> 
                    <p className='text-2xl lg:text-4xl font-bold capitalize'>
                        The projects we done!
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
                        <button className='border border-gray-700 hover:bg-blue-600 hover:text-white text-black font-semibold py-2 px-5 rounded-md'>Equipment and Tools</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products