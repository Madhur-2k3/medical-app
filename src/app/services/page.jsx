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
        title={'FASTER INSURANCE CLAIM'}
        desc={'A faster insurance claim denotes the accelerated handling, review, and resolution of insurance claims submitted by policyholders or healthcare providers to insurance companies or payers. It encompasses several key aspects aimed at streamlining the claims process and reducing the time taken to receive reimbursement'}
        bg={'gray-200'}
      />
      <Benefits
        heading1={"Cost, speed, and accuracy"}
        heading2={"No need to make trade-offs, choose all three"}
      />

    </>
  )
}
