import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg  flex text-white'>
        <div className='flex  justify-between w-full mx-[10rem] '>
        <div className='flex flex-col mt-[12rem]  gap-1'>
            <p className='font-medium text text-2xl'>Pro.Beyond.</p>
            <h1 className='text-8xl font-[100] mb-2'>IPhone 14 <span className='font-[500]'>Pro</span></h1>
            <h2 className='mb-2 text-xl text'>Created to change everything for the better. For everyone</h2>
            <div>
            <button className='border py-4 mt-2 px-[3rem] rounded hover:bg-white hover:text-black transition delay-200 ease-in-out '>Shop Now</button>
            </div>
           
        </div>
        <div className=' mb-5 mt-[5rem]'>
                <Image alt='iphone' width={400} height={400} className='w-[25rem]' src='/12121.PNG'></Image>
            </div>
            </div>
    </div>
  )
}

export default Hero