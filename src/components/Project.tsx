import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
    name: string
    description: string
    image: string
    subpageid: string
}

export default function Project( props: ProjectProps ) {
  return (
    <div className='my-8 flex flex-col gap-4 sm:flex-row'>
        <Image src={props.image} width={200} height={200} alt="temp" className='object-contain w-full sm:w-1/2 aspect-video h-auto rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800'/>
        <div className='py-4 flex flex-col justify-between'>
            <div>
                <h2 className='font-medium text-xl mb-2 tracking-tighter'>{props.name}</h2>
                <p className='leading-6 mt-4'>{props.description}</p>
            </div>
            <Link href={"/project/" + props.subpageid} className='text-primary-500 dark:text-primary-400 font-medium mt-4 underline flex items-center gap-2'>
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </Link>
        </div>
      </div>
  )
}
