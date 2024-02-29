import React from 'react'
import Image from 'next/image'

export default function Team() {
  return (
    <div>
        <h1 className="text-center w-full mx-auto py-5 font-serif font-bold">Team</h1>
        <div className="container sm:flex  justify-evenly w-full flex-wrap mx-auto gap-5 -z-10 ">
            <div className="single flex flex-col items-center justify-center lg:w-[30%]  ">
                <Image src='/laxmikanth.svg' height={150} width={150} className=' rounded-full mix-blend-multiply'/>
                <p className=' w-[60%] text-center'>KOPPARAPU LAXMI KANTH</p>
                <p className='pb-5'>CEO</p>
            </div>
            <div className="single flex flex-col items-center justify-center lg:w-[30%]">
                <Image src='/thanush.svg' height={150} width={150} className=' rounded-full mix-blend-multiply ' />
                <p className='w-[60%] text-center'>GUGULOTH THANUSH</p>
                <p className='pb-5'>COO</p>
            </div>
            <div className="single flex flex-col items-center justify-center lg:w-[30%]">
                <Image src='/madhur.jpg' height={150} width={150} className=' rounded-full mix-blend-multiply'/>
                <p className='w-[60%] text-center'>Madhur Kannamwar</p>
                <p className='pb-5'>CTO</p>
            </div>
        </div>
    </div>
  )
}
