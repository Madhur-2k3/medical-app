import Link from 'next/link'
import React from 'react'

export default function ServicesHero({title,desc,bg}) {
  return (
    <div className={`bg-${bg}`}>
        <div className='w-[80%] flex flex-col items-center justify-center mx-auto py-7 gap-3 '>
            <h1 className=' font-serif font-bold text-3xl'>{title}</h1>
            <p className='text-center text-xl'>{desc}</p>
            
        </div>
    </div>
  )
}
