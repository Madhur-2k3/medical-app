import React from 'react'
import SearchHero from '../components/SearchHero'
import Benefits from '../components/Benefits'
import Team from '../components/Team'

export default function TeamPage() {
  return (
    <>
    <SearchHero 
    heading={"On a mission to structure the world's healthcare data"}
    matter={"DHANVANTRI has brought together a world-class team of technologists, designers, and business people to fix one of the most broken parts of the healthcare system."}
    button={"EXPLORE CAREERS"}
    // buttonType={"hidden"}
    loaction={"search"}
    />
    <Team/>
    
    </>
    
    
  )
}
