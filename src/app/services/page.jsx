import Link from 'next/link'
import React from 'react'
import SearchHero from '../components/SearchHero'
import Benefits from '../components/Benefits'
import ServicesHero from '../components/ServicesHero'

export default function Service() {
  return (
    <>
      <SearchHero heading={'Medical coding automation services built for you'}
                matter={"DHANVANTRI's AI seamlessly intergrates into your workflow"}
                button={'GET STARTED'}
      />
      <ServicesHero
        title={'STANDARDIZING DATA'}
        desc={'standardizing data involves the process of ensuring that all numerical information used for analysis, billing, or research purposes follows a uniform scale or measurement system. This helps facilitate accurate comparisons, analysis, and decision-making across different healthcare records and databases.'}
        bg={'white'}
      />
      <ServicesHero
        title={'Production coding'}
        desc={'production coding is the development of software solutions that are ready for deployment and use by end-users or customers. It often follows a series of development processes, including coding, testing, quality assurance, and deployment, to ensure that the software meets performance, reliability, and functionality requirements in real-world scenarios.'}
        bg={'gray-200'}
      />
      <Benefits
        heading1={"Faster, cheaper, and more accurate"}
        heading2={"Supercharge your medical coding operations"}
      />

    </>
  )
}
