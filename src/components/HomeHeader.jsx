import Link from 'next/link'
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className='flex justify-end p-5 text-sm'>
      <div className='flex items-center space-x-4 '>
        <Link className='hover:underline' href={'https://www.google.com/gmail/about/'}>
          Gmail
        </Link>

        <Link href={'https://images.google.com/'}>
          Images
        </Link> 

        <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2' />

        <button className='bg-blue-500 text-white rounded-md py-2 px-6 
        font-medium hover:brightness-105 hover:shadow-md transition-shadow'>Sign in</button>


        
      </div>
    </header>
  )
}
