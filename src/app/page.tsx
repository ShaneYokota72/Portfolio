import Head from 'next/head'
import Introduction from '@/pages/Introduction'
import About from '@/pages/About'
import Work from '@/pages/Work'
import Educations from '@/pages/Educations'
import Projects from '@/pages/Projects'
import Ending from '@/pages/Ending'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shane Yokota</title>
      </Head>

      <div className='flex flex-col gap-8'>
        <p className='text-sm font-mono text-gray-500'> Updated As of Dec 19th, 2025</p>
        <Introduction/>
        <About/>
        <Work/>
        <Educations/>
        <Projects/>
        <Ending/>
      </div>
    </>
  )
}
