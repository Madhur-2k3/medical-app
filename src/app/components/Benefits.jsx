import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Benefits({heading1,heading2}) {
  return (
    <>
        <div className="benefit-section ">
                <div className="flex flex-col gap-4 my-6 mx-auto py-4">
                    <p className='text-center text-gray-600 font-medium'>BENEFITS</p>
                    <p className='text-center text-5xl'>{heading1}</p>
                    <p className='text-center text-2xl text-gray-600'>{heading2}</p>

                </div>
                <div className='container flex flex-wrap justify-center items-center w-full my-5 mx-auto gap-3'>
                    <div className="card sm:w-[30%] gap-1 w-[50%] flex flex-col items-center">
                        <Image src='/cost.svg' height={100} width={100} loading='lazy'/>
                        <p className="font-medium">Cost</p>
                        <p className='text-center lg:w-[60%]'>Reduce the total cost of your coding operations by up to 50%.</p>     
                    </div>
                    <div className="card sm:w-[30%] gap-1 flex flex-col items-center">
                        <Image src='/accuracy.svg' height={100} width={100} loading='lazy'/>
                        <p className="font-medium">Accuracy</p>
                        <p className='text-center  lg:w-[60%]'>Instantly reduce claim denials and mitigate audit risk.</p>     
                    </div>
                    <div className="card sm:w-[30%] gap-1 flex flex-col items-center">
                        <Image src='/speed.svg' height={100} width={100} loading='lazy'/>
                        <p className="font-medium">Speed</p>
                        <p className='text-center lg:w-[60%]'>Cut your coding turnaround by days, not hours or minutes.</p>     
                    </div>
                    <div className="card sm:w-[30%] gap-1 flex flex-col items-center">
                        <Image src='/scale.svg' height={100} width={100} loading='lazy'/>
                        <p className="font-medium">Scale</p>
                        <p className='text-center lg:w-[60%]'>Effortlessly add the capacity to code millions of charts per day..</p>     
                    </div>
                    <div className="card sm:w-[30%] gap-1 flex flex-col items-center">
                        <Image src='/reliability.svg' height={100} width={100} loading='lazy'/>
                        <p className="font-medium">Reliability</p>
                        <p className='text-center lg:w-[60%]'>Ensure that your coding operations never slow down or stop.</p>     
                    </div>
                    <div className="card sm:w-[30%] gap-1 flex flex-col items-center">
                        <Image src='/security.svg' height={100} width={100} loading='lazy'/>
                        <p className="font-medium">Security</p>
                        <p className='text-center lg:w-[60%]'>Keep your PHI secure with industry leading technology and protocol.</p>     
                    </div>
                </div>
                <Link href='/contact' className='flex justify-center w-fit mx-auto'>
                    <button className='my-5 p-3 px-7 border-x-2 border-blue-800 text-white bg-violet-500 rounded-full'>SCHEDULE A CALL</button>
                </Link>
        </div>
    </>
  )
}
