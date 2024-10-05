"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Tag from './Tag'
import clsx from 'clsx'

const HIGH_LIGHT_COLORS:Record<string, string> = {
    'Tacer': 'via-purple-800',
    'Tinker': 'via-green-800',
    'Med2Meals': 'via-rose-800',
    'DevMesh': 'via-yellow-800',
}
const HIGH_LIGHT_BOTTOM_MAIN_COLORS:Record<string, string> = {
    'Tacer': 'via-purple-800',
    'Tinker': 'via-green-800',
    'Med2Meals': 'via-rose-800',
    'DevMesh': 'via-yellow-800',
}
const HIGH_LIGHT_BOTTOM_SUB_COLORS:Record<string, string> = {
    'Tacer': 'group-hover:via-purple-500',
    'Tinker': 'group-hover:via-green-500',
    'Med2Meals': 'group-hover:via-rose-500',
    'DevMesh': 'group-hover:via-yellow-500',
}

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
    links,
}: ProjectProps) {
    const router = useRouter()
    return (
        <div className='relative w-full sm:w-[calc(50%-16px)] h-fit sm:h-[320px] flex-col gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 overflow-hidden m-1 group hover:brightness-105'>
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

            <div className={clsx("h-2 w-full bg-gradient-to-l from-transparent to-transparent group-hover:blur-xl blur-3xl m-auto rounded transition-all absolute bottom-0", HIGH_LIGHT_COLORS[name])}></div>
            <div className={clsx('w-[70%] h-0.5 left-0 right-0 mx-auto group-hover:w-full bg-gradient-to-l from-transparent to-transparent rounded transition-all absolute bottom-0', HIGH_LIGHT_BOTTOM_MAIN_COLORS[name], HIGH_LIGHT_BOTTOM_SUB_COLORS[name])}/>
        </div>
    )
}
