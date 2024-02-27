import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="services-section bg-gray-200 ">
                <div className="flex flex-col gap-4  mx-auto py-4">
                    <p className='text-center text-gray-600 font-medium'>SERVICES</p>
                    <p className='text-center text-5xl'>Coding services tailored to your workflow</p>
                    {/* <p className='text-center text-2xl text-gray-600'>No need to make trade-offs, choose all three</p> */}

                </div>
                <div className='container flex flex-wrap justify-center items-center w-full my-5 mx-auto gap-3'>
                    <div className="card sm:w-[30%] gap-1 w-[50%] flex flex-col items-center">
                        <Image src='/cost.svg' height={100} width={100} loading='lazy'/>
                        <p className="font-medium">Standardizing Data</p>
                        <p className='text-center lg:w-[60%]'>Reduce the total cost of your coding operations by up to 50%.</p>     
                    </div>
                    <div className="card sm:w-[30%] gap-1 flex flex-col items-center">
                        <Image src='/accuracy.svg' height={100} width={100} loading='lazy'/>
                        <p className="font-medium">Production Coding</p>
                        <p className='text-center  lg:w-[60%]'>Instantly reduce claim denials and mitigate audit risk.</p>     
                    </div>
                    <div className="card sm:w-[30%] gap-1 flex flex-col items-center">
                        <Image src='/speed.svg' height={100} width={100} loading='lazy'/>
                        <p className="font-medium text-center">Faster cheaper and insurance clariance</p>
                        <p className='text-center lg:w-[60%]'>Cut your coding turnaround by days, not hours or minutes.</p>     
                    </div>
                    <div className="card sm:w-[30%] gap-1 flex flex-col items-center">
                        <Image src='/scale.svg' height={100} width={100} loading='lazy'/>
                        <p className="font-medium text-center">Real time audit & Real time visualization</p>
                        <p className='text-center lg:w-[60%]'>Effortlessly add the capacity to code millions of charts per day..</p>     
                    </div>
                    
                </div>
                <Link href='/services' className='flex justify-center'>
                    <button className='my-5 p-3 px-7 border-x-2 border-blue-800 text-white bg-violet-500 rounded-full'>EXPLORE SERVICES</button>
                </Link>
        </div>
  )
}
