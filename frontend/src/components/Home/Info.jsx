import React from 'react'
import bapco from '../../assets/website/bapco.png'

const Info = () => {
  return (
    <div className='container flex flex-col items-center justify-center py-8 gap-4'>
        <div className='flex items-center justify-center' >
            <img src={bapco} className='w-[90%] lg:w-1/2 md:[80%] h-auto' alt="bapco" />
        </div>
        <div className='flex justify-center items-center'>
            <p className='text-sm md:text-base lg:text-base text-justify text-gray-900'>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sed quis est sit amet sapien malesuada bibendum. 
                Quisque et nisi urna. Orci varius natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus. Maecenas vel metus tellus. In vestibulum mi leo, ac vulputate ligula porta id. 
                Donec congue ipsum ac tempor faucibus. Vestibulum venenatis non nibh vel hendrerit. Aliquam eu vulputate dolor. 
                Donec sollicitudin metus et sem ultrices commodo. Pellentesque sed ligula nec dui bibendum tempor.Aliquam ac luctus odio, 
                in sagittis justo.Cras id rutrum nunc, nec semper massa. Ut semper porttitor erat, sed volutpat velit efficitur ac. 
                Donec et sapien suscipit, ornare eros vel, mollis felis. Proin ligula ipsum, lacinia ullamcorper facilisis vitae, 
                congue id turpis. Nam sit amet orci libero. Sed id augue consequat lectus laoreet tempor. Nam nec dolor a mauris sagittis eleifend id in lorem. 
                Donec nec interdum erat. Donec euismod bibendum risus quis porta. Morbi eget enim in lectus congue imperdiet.</p>
        </div>
    </div>
  )
}

export default Info