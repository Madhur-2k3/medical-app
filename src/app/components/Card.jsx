import React from 'react'
import Image from 'next/image'

const Card = ({desc}) => {
  return (
    <div className=' container w-[90%] sm:w-[40%] md:w-[30%] flex-wrap py-3 my-4 shadow-2xl p-4 mx-auto  rounded-2xl bg-slate-200 hover:scale-[1.05]  hover:duration-500'>
        <Image src='/insights1.png' width={350} height={500} priority style={{width:'auto'}}/>
        <p className='w-[90%] mx-auto text-2xl'>Combat employee burnout and staffing shortages with AI automated medical coding</p>
        <p className='w-[90] text-center text-xs py-3 text-gray-500 font-serif'>ARTIFICIAL INTELLIGENCE</p>
        <p className='w-[90%] mx-auto text-xl'>{desc.substring(0,100)}<span>...</span></p>
    </div>
  )
}

export default Card