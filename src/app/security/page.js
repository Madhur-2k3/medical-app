import React from 'react'
import SearchHero from '../components/SearchHero'
import Security from '../components/Security'

export default function SecurityPage() {
  return (
    <>
    
    <SearchHero
        heading={"Security and compliance"}
        matter={'A Holistic approach to ensuring security of your data'}
        buttonType={'hidden'}
      />

      <Security/>
      
    </>
    
  )
}
