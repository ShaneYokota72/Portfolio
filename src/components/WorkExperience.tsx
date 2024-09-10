"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'

interface WorkExperienceProps {
    imgSrc: string
    companyName: string
    position: string
    details: React.ReactNode
    startDate: string
    endDate: string
}

export default function WorkExperience({
    imgSrc,
    companyName,
    position,
    details,
    startDate,
    endDate
}: WorkExperienceProps) {
    const [expanded, setExpanded] = useState(false)
    return (
        <div className='flex justify-between items-start [&_p]:text-sm transform'>
            <div className='flex gap-4 items-start'>
                <Image src={imgSrc} width={56} height={56} alt="Company Logo" className='border border-neutral-200 dark:border-neutral-700 p-[2px] w-14 h-14 rounded-full object-cover dark:bg-neutral-200'></Image>
                <div className='flex flex-col mt-2'>
                <div 
                    className='flex items-center cursor-pointer group'
                    onClick={() => setExpanded(!expanded)}
                >
                    <p className='font-semibold'>{companyName}</p>
                    <ChevronRight className='w-4 h-4 ml-1 opacity-0 -translate-x-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0' />
                </div>
                    <p className='font-extralight '>{position}</p>
                    <div
                        className={clsx(
                            'overflow-hidden transition-all duration-1000 ease-in-out',
                            expanded ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        )}
                    >
                        {details}
                    </div>
                </div>
            </div>
            <p className='text-light-grey min-w-fit mt-4'>
                {startDate} - {endDate}
            </p>
        </div>
    )
}
