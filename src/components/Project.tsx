"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Tag from './Tag'

interface ProjectProps {
    name: string
    description: string[]
    image: string
    links: Record<string, string>
}

export default function Project({
    name,
    description,
    image,
    links
}: ProjectProps) {
    const router = useRouter()
    return (
        <div className='w-full sm:w-[calc(50%-16px)] h-fit sm:h-[315px] flex-col gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 overflow-hidden m-1'>
            <Image src={image} width={440} height={280} alt={name} className='object-fill w-full aspect-video h-44'/>
            <div className='sm:h-[139px] flex flex-col gap-4 sm:gap-0 sm:justify-between p-2'>
                <div>
                    <h4 className='font-semibold text-lg tracking-tighter'>{name}</h4>
                    {description.map((description, index) => (
                        <p key={index} className='text-sm'>{description}</p>
                    ))}
                </div>
                <div className='flex gap-2'>
                    {
                        Object.entries(links).map(([key, value]) => (
                            <Tag key={key} tag={key} onClick={() => {router.push(value)}} />
                        ))     
                    }
                </div>
            </div>
        </div>
    )
}
