import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Security() {
  return (
        <div className="benefit-section ">
                <div className="flex flex-col gap-4 my-6 mx-auto py-4">
                    <p className='text-center text-gray-600 font-medium'>POLICY AND PROCEDURES</p>
                    <p className='text-center text-5xl'>A holistic approach to ensuring security of your data</p>
                    <p className='text-center text-2xl text-gray-600'>DHANVANTRI's systems drive excellence in security and compliance across all aspects of the organization</p>

                </div>
                <div className='container flex flex-wrap justify-center items-center w-full my-5 mx-auto gap-3'>
                    <div className="card sm:w-[30%] gap-1 w-full  flex  justify-center items-center">
                        <Image src='application security.svg' height={70} width={70} loading='lazy'/>
                        <p className="font-medium w-[60%]">Application security</p>
                        {/* <p className='text-center lg:w-[60%]'>Reduce the total cost of your coding operations by up to 50%.</p>      */}
                    </div>
                    <div className="card sm:w-[30%] w-full gap-1 flex  justify-center items-center">
                        <Image src='infrastucture.svg' height={70} width={70} loading='lazy'/>
                        <p className="font-medium w-[60%]">Infrastructure security</p>
                        {/* <p className='text-center  lg:w-[60%]'>Instantly reduce claim denials and mitigate audit risk.</p>      */}
                    </div>
                    <div className="card sm:w-[30%] w-full gap-1 flex  justify-center items-center">
                        <Image src='business.svg' height={70} width={70} loading='lazy'/>
                        <p className="font-medium w-[60%]">Business continuity</p>
                        {/* <p className='text-center lg:w-[60%]'>Cut your coding turnaround by days, not hours or minutes.</p>      */}
                    </div>
                    <div className="card sm:w-[30%] w-full gap-1 flex  justify-center items-center">
                        <Image src='/incident management.svg' height={70} width={70} loading='lazy'/>
                        <p className="font-medium w-[60%]">Incident management</p>
                        {/* <p className='text-center lg:w-[60%]'>Effortlessly add the capacity to code millions of charts per day..</p>      */}
                    </div>
                    <div className="card sm:w-[30%] w-full gap-1 flex justify-center items-center">
                        <Image src='/data privacy.svg' height={70} width={70} loading='lazy'/>
                        <p className="font-medium w-[60%]">Data privacy and management</p>
                        {/* <p className='text-center lg:w-[60%]'>Ensure that your coding operations never slow down or stop.</p>      */}
                    </div>
                    <div className="card sm:w-[30%] w-full  gap-1 flex justify-center items-center">
                        <Image src='/threat.svg' height={70} width={70} loading='lazy'/>
                        <p className=" font-medium w-[60%]">Threat and vulnerability management</p>
                        {/* <p className='text-center lg:w-[60%]'>Keep your PHI secure with industry leading technology and protocol.</p>      */}
                    </div>
                    <div className="card sm:w-[30%] w-full  gap-1 flex  justify-center items-center">
                        <Image src='/disaster recovery.svg' height={70} width={70} loading='lazy'/>
                        <p className="font-medium w-[60%]">Disaster recovery</p>
                        {/* <p className='text-center lg:w-[60%]'>Keep your PHI secure with industry leading technology and protocol.</p>      */}
                    </div>
                    <div className="card sm:w-[30%] w-full  gap-1 flex  justify-center items-center">
                        <Image src='/accesssvg.svg' height={70} width={70} loading='lazy'/>
                        <p className="font-medium w-[60%]">Access management</p>
                        {/* <p className='text-center lg:w-[60%]'>Keep your PHI secure with industry leading technology and protocol.</p>      */}
                    </div>
                    <div className="card sm:w-[30%] w-full  gap-1 flex  justify-center items-center">
                        <Image src='/workforce training.svg' height={70} width={70} loading='lazy'/>
                        <p className="font-medium w-[60%]">Workforce training</p>
                        {/* <p className='text-center lg:w-[60%]'>Keep your PHI secure with industry leading technology and protocol.</p>      */}
                    </div>
                </div>
                <Link href='/contact' className='flex justify-center'>
                    <button className='my-5 p-3 px-7 border-x-2 border-blue-800 text-white bg-violet-500 rounded-full'>SCHEDULE A CALL</button>
                </Link>
        </div>
  )
}
