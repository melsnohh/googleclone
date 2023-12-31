import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
    <HomeHeader/>

    <div className='flex items-center flex-col mt-24'>
      <Image alt='googleimage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
       width={300} 
       height={100} 
       />

       <HomeSearch />

    </div>
    </>
  )
}
