import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PageHeader from '@/components/PageHeader'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shane Yokota',
  description: "Shane Yokota's Portfolio",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='text-black bg-white dark:text-white dark:bg-[#111010]'>
      <meta name="google-site-verification" content="kN2G5y4OfVNDr8v-n4fd24FnY6VLbJj-ztA2Lxog9Uo" />
      <body className={inter.className + " antialiased max-w-2xl mb-40 flex flex-col mx-4 mt-8 lg:mx-auto"}>
        <div className='flex flex-col gap-12'>
          <PageHeader />
          <div className='w-full'>
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
