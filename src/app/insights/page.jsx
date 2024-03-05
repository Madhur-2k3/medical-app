import React from 'react'
import SearchHero from '../components/SearchHero'
import Card from '../components/Card'
import data from '../data'
import Image from 'next/image'
import Link from 'next/link'

export default async function Insights() {

  console.log(data[0])

  
  return (
      <>
      
      <SearchHero
        heading={"News, resources, and insights"}
        matter={"The latest from the Dhanvantri team on artificial intelligence, revenue cycle management, digital health and everything in between."}
        buttonType={'hidden'}
      />

      <div className="w-full flex flex-wrap md:w-[80%] mx-auto ">
        {
          data.map((curElem)=>{
            return(
              
              <Link href={`/insights/${curElem.id}`} className=' max-w-fit container w-[90%] sm:w-[40%] md:w-[30%] flex-wrap py-3 my-6 shadow-2xl p-4 mx-auto  rounded-2xl bg-slate-200 hover:scale-[1.05]  hover:duration-500'>
                <div className=' ' key={curElem.id}>
                  <Image src={curElem.imageurl}  width={350} height={500} priority style={{width:'auto'}}/>
                  <p className='w-[90%] mx-auto text-2xl'>{curElem.title}</p>
                  <p className='w-[90] text-center text-xs py-3 text-gray-500 font-serif'>ARTIFICIAL INTELLIGENCE</p>
                  <p className='w-[90%] mx-auto text-xl'>{curElem.description.substring(0,100)}<span>...</span></p>
                </div>
              </Link>

            )
          })
        }
        
      </div>
      
      </>
  )
}
