import React from 'react'
import data from '@/app/data';
import Image from 'next/image';
const page = ({params}) => {

  const id=params.id;
  
  return (
    <div className=' leading-6 tracking-wide flex flex-col items-center gap-4 my-5'>
      {/* {data[id-1].title} */}
      <p className='w-[85%] mx-auto text-xs text-gray-500'>IN THE NEWS</p>
      <h1 className='w-[85%] mx-auto font-bold font-sans text-3xl'>{data[id-1].title}</h1>
      <p className='w-[85%] mx-auto'>{data[id-1].data}</p>
      <Image src={data[id-1].imageurl} width={900} height={400} className='w-[85%] mx-auto'/>
      <p className='w-[85%] sm:w-[50%] mx-auto text-xl'>{data[id-1].description}</p>
    </div>
  )
}

export default page