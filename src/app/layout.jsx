import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone Next Js 14',
  description: 'Google Clone created by Next js 14',

}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <link rel="icon" href="/favicon.svg" />
    </html>
  )
}
