import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Introduction() {
  return (
    <div>
        <div className='flex-1 flex items-end lg:items-start justify-between gap-2 lg:gap-8 '>
            <div>
            <h1 className='mb-4 text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>hey, I'm Shane 👋</h1>
            <h2 className='text-xl'>
                Software Engineer and Entrepreneur. Check out what I've built {" "}
                <Link href="#projects" className='underline items-center inline-flex gap-1'>
                    <span>projects</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-arrow-up-right mt-1" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </Link>
            </h2>
            </div>
            <Image src='/ShaneImage.webp' height={160} width={160} alt="Profile Picture" className='w-40 h-40 aspect-square object-fill rounded-full'/>
        </div>
    </div>
  )
}
