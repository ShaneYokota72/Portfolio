import React, { useEffect } from 'react'
import {projectData} from '@/util/projectData'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title  : 'Projects - Shane Yokota',
     description: "Shane Yokota's Projects",
}


export default function page({ params }: { params: { id: string } }) {
    const data = projectData[params.id]
    return (
        <div>
            <h3 className='font-medium text-3xl mb-4 tracking-tighter'>{data.title}</h3>
            <div className='flex flex-wrap gap-2'>
                {
                    data.image?.map( (image, index) => {
                        return (
                            <Image key={index} src={image} width={200} height={200} alt="temp" className={clsx('w-full h-auto', {"!w-[45%]" : data.imagestyle})}/>
                        )
                    })
                }
            </div>
            <div className='flex flex-col gap-2 mt-6'>
                {data.description.map( (description, index) => {
                    return (
                        <p key={index} className='leading-8'>{description}</p>
                    )
                })}
            </div>
            {
                data.link && 
                <p className='leading-8 mt-6'>
                    Link : <Link href={data.link} className='border w-fit border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded inline-flex items-center justify-between gap-2 px-2 hover:border-2'>{data.title}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                    </Link>
                </p>
            }
            {
                data.github && 
                <p className='leading-8 mt-6'>
                    Github Link : <Link href={data.github} className='border w-fit border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded inline-flex items-center justify-between gap-2 px-2 hover:border-2'>{data.title}-Github 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                    </Link>
                </p>
            }
        </div>
    )
}
