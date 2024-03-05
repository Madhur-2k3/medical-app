import React from 'react'

export default function loading() {
  return (
    <div className=' leading-6 tracking-wide flex flex-col items-center gap-4 my-5 animate-pulse'>
      {/* {data[id-1].title} */}
      <div className='w-28  text-xs text-gray-500 bg-gray-400 h-4 rounded-md flex items-start'></div>

      <div className='w-[85%] mx-auto font-bold font-sans text-3xl bg-gray-400 h-20 rounded-md'></div>

      {/* <div className='w-[85%] mx-auto bg-gray-400 h-1'></div> */}

      <div  className='w-[85%] mx-auto bg-gray-400 h-72 rounded-md'></div>

      <div className='w-[85%]  mx-auto text-xl bg-gray-400 h-20 rounded-md'></div>
    </div>
  )
}
