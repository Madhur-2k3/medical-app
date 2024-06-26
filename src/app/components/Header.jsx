'use client'

import Link from 'next/link'
import { useRouter,usePathname } from 'next/navigation'
import React from 'react'
import './Header.css'
// import About from './About'

export default function Header() {

  const router=useRouter();
  const Pathname=usePathname();

  return (
    // <header>
        
    //     <div className=" w-full max-w-[1248px] text-center object-none block  relative mx-auto px-6">

    //      <div className="flex order-1 justify-between items-center text-sm font-medium leading-6 ;
    //         font-family: Barlow, sans-serif">

    //         <div onClick={()=>router.push('/')} 
    //           className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer py-1 px-2 text-2xl
    //           ${Pathname==='/' && '!text-blue-600 border-blue-600'}`}>
    //             DHANVANTRI
    //         </div>
    //         <div onClick={()=>router.push('/services')}
    //         className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer py-4 px-2
    //         ${Pathname==='/services' && '!text-blue-600 border-blue-600'}`}>
    //           Services
    //         </div>
    //         <div onClick={()=>router.push('/security')}
    //         className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer py-4 px-2
    //         ${Pathname==='/security' && '!text-blue-600 border-blue-600'}`}>
    //           Security
    //         </div>
    //         <div onClick={()=>router.push('/team')}
    //         className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer py-4 px-2
    //         ${Pathname==='/team' && '!text-blue-600 border-blue-600'}`}>
    //           Team
    //         </div>
    //         <div onClick={()=>router.push('/insights')}
    //         className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer py-4 px-2
    //         ${Pathname==='/insights' && '!text-blue-600 border-blue-600'}`}>
    //           Insights
    //         </div>
    //         <div onClick={()=>router.push('/contact')}
    //         className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer py-4 px-2
    //         ${Pathname==='/contact' && '!text-blue-600 border-blue-600'}`}>
    //           Contact
    //         </div>
            
    //       </div>

    //     </div>
    // </header>


    <header className='sticky top-0 z-10'>
    <nav class=" border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800 sticky top-0">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap logo">DHANVANTRI</span>
            </Link>
            <div class="flex items-center lg:order-2">
                {/* <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a> */}
                {/* <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button> */}
            </div>
            <div class=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-row mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 flex-wrap">
                    <li>
                        <Link href="/services" class={`"  block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-400 ${Pathname==='/services' && '!text-white border-white'} "`} aria-current="page">Services</Link>
                    </li>
                   
                    <li>
                        <Link href="/security" class={`" block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-400 ${Pathname==='/security' && '!text-white border-white'}  "`}>Security</Link>
                    </li>
                    
                    <li>
                        <Link href="/team" class={`" block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-400 ${Pathname==='/team' && '!text-white border-white'}  "`}>Team</Link>
                    </li>
                    <li>
                        <Link href="/insights" class={`" block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-400 ${Pathname==='/insights' && '!text-white border-white'}  "`}>Insights</Link>
                    </li>
                    <li>
                        <Link href="/contact" class={`" block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-400 ${Pathname==='/contact' && '!text-white border-white'} "`}>Contact</Link>
                    </li>
                </ul>
              </div>
          </div>
      </nav>
    </header>



  )
}
