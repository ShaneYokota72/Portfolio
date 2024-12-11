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
