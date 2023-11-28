import SearchHeader from '@/components/SearchHeader'
import { Inter } from 'next/font/google'
import './../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone Next Js 14',
  description: 'Google Clone created by Next js 14',

}
 
export default function SearchLayout({ children }) {
  return (
  
     <div>
        <SearchHeader />
        {children}
    </div>
   
  )
}
