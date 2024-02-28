import Link from 'next/link'
import React from 'react'
import SearchHero from '../components/SearchHero'
import Benefits from '../components/Benefits'

export default function Service() {
  return (
    <>
      <SearchHero heading={'Medical coding automation services built for you'}
                matter={"DHANVANTRI's AI seamlessly intergrates into your workflow"}
                button={'GET STARTED'}
      />
      <Benefits
        heading1={"Faster, cheaper, and more accurate"}
        heading2={"Supercharge your medical coding operations"}
      />

    </>
  )
}
