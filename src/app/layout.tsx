import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shane Yokota',
  description: "Shane Yokota's Portfolio", 
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon.png',
        href: '/favicon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon.png',
        href: '/favicon.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='text-black bg-white dark:text-white dark:bg-[#111010]'>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <meta name="google-site-verification" content="kN2G5y4OfVNDr8v-n4fd24FnY6VLbJj-ztA2Lxog9Uo" />
      <body className={inter.className + " antialiased max-w-2xl my-8 flex flex-col mx-4 lg:mx-auto"}>
        <div className='py-12'>
          <div className='w-full'>
            {children}
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  )
}
