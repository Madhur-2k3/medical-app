'use client'

import Link from 'next/link'
import { useRouter,usePathname } from 'next/navigation'
import React from 'react'
// import About from './About'

export default function Header() {

  const router=useRouter();
  const Pathname=usePathname();

  return (
    <header>
        {/* <div className="">
            <Link href='/'>
                Home
            </Link>
            <Link href='/about'>
                About
            </Link>
        </div> */}
        <div className=" w-full max-w-[1248px] text-center object-none block  relative mx-auto px-6">

         <div className="flex order-1 justify-between items-center text-sm font-medium leading-6 ;
            font-family: Barlow, sans-serif">

            <div onClick={()=>router.push('/')} 
              className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer py-1 px-2 text-2xl
              ${Pathname==='/' && '!text-blue-600 border-blue-600'}`}>
                DHANVANTRI
            </div>
            <div onClick={()=>router.push('/services')}
            className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer py-4 px-2
            ${Pathname==='/services' && '!text-blue-600 border-blue-600'}`}>
              Services
            </div>
            <div onClick={()=>router.push('/security')}
            className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer py-4 px-2
            ${Pathname==='/security' && '!text-blue-600 border-blue-600'}`}>
              Security
            </div>
            <div onClick={()=>router.push('/team')}
            className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer py-4 px-2
            ${Pathname==='/team' && '!text-blue-600 border-blue-600'}`}>
              Team
            </div>
            <div onClick={()=>router.push('/insights')}
            className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer py-4 px-2
            ${Pathname==='/insights' && '!text-blue-600 border-blue-600'}`}>
              Insights
            </div>
            <div onClick={()=>router.push('/contact')}
            className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer py-4 px-2
            ${Pathname==='/contact' && '!text-blue-600 border-blue-600'}`}>
              Contact
            </div>
            
          </div>

        </div>
    </header>
  )
}
