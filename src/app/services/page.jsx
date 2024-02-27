import Link from 'next/link'
import React from 'react'
import SearchHero from '../components/SearchHero'

export default function Service() {
  return (
    <SearchHero heading={'Medical coding automation services built for you'}
                matter={"DHANVANTRI's AI seamlessly intergrates into your workflow"}
                button={'GET STARTED'}
    />
  )
}
