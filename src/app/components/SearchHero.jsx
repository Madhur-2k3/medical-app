import React from 'react'
import Link from 'next/link'
import './SearchHero.css'

export default function SearchHero({heading,matter,button,buttonType,location}) {
  return (
    <div className=' first-hero flex space-x-1 flex-col items-center text-center mx-auto gap-10 py-10 text-white bg-violet-400 w-full h-fit'>
      <h1 className=' text-3xl sm:text-5xl  font-sans font-medium'>{heading}</h1>
      <p className=' text-xl sm:text-2xl font-sans font-normal sm:font-semibold'>{matter}</p>
      <Link href='/contact'>
        <button className={`my-5 p-3 px-7 text-blue-500 bg-white rounded-full ${buttonType}`}>{button}</button>
      </Link>
    </div>
  )
}
