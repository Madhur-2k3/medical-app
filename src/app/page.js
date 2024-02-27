import React from 'react'
import HomeHero from './components/HomeHero'
import SearchHero from './components/SearchHero'

export default function Home() {
  return (
    // <HomeHero/>
    <SearchHero 
    heading={'AI in Medical Coding'} 
    matter={"What if you had a coder who could code millions of charts per day at unparalled accuracy and cost"}
    button={"GET STARTED"}
    />
  )
}
