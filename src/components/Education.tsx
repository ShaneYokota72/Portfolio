"use client"
import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface EducationProps {
    imgSrc: string
    companyName: string
    details: string
    startDate: string
    endDate: string
    redirectLink: string
}

export default function Education({
    imgSrc,
    companyName,
    details,
    startDate,
    endDate,
    redirectLink
}: EducationProps) {
    const router = useRouter()
    return (
        <div className='flex justify-between items-start [&_p]:text-sm transform'>
            <div className='flex gap-4 items-start'>
                <Image src={imgSrc} width={56} height={56} alt="Company Logo" className='border border-neutral-200 dark:border-neutral-700 p-[2px] w-14 h-14 rounded-full object-cover dark:bg-neutral-200'></Image>
                <div className='flex flex-col mt-2'>
                <div 
                    className='flex items-center cursor-pointer group'
                    onClick={() => {router.push(redirectLink)}}
                >
                    <p className='font-semibold'>{companyName}</p>
                    <ChevronRight className='w-4 h-4 ml-1 opacity-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0' />
                </div>
                    <p className='font-extralight'>{details}</p>
                </div>
            </div>
            <p className='text-light-grey min-w-fit mt-4'>
                {startDate} - {endDate}
            </p>
        </div>
    )
}
