import React from 'react'
import SearchHero from './components/SearchHero'
import Benefits from './components/Benefits'

export default function Home() {
  return (
    <>
      <SearchHero 
      heading={'AI in Medical Coding'} 
      matter={"What if you had a coder who could code millions of charts per day at unparalled accuracy and cost"}
      button={"GET STARTED"}
      />

      <Benefits/>

    </>
    
  )
}
