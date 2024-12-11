"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Project as ProjectProps } from '@/util/projectData'
import Tag from './Tag'
import clsx from 'clsx'

const HIGH_LIGHT_COLORS:Record<string, string> = {
    'Tacer': 'via-purple-800',
    'Tinker': 'via-green-800',
    'Med2Meals': 'via-rose-800',
    'DevMesh': 'via-yellow-800',
    'CareerChain': 'via-slate-600',
}
const HIGH_LIGHT_BOTTOM_MAIN_COLORS:Record<string, string> = {
    'Tacer': 'via-purple-800',
    'Tinker': 'via-green-800',
    'Med2Meals': 'via-rose-800',
    'DevMesh': 'via-yellow-800',
    'CareerChain': 'via-slate-600',
}
const HIGH_LIGHT_BOTTOM_SUB_COLORS:Record<string, string> = {
    'Tacer': 'group-hover:via-purple-500',
    'Tinker': 'group-hover:via-green-500',
    'Med2Meals': 'group-hover:via-rose-500',
    'DevMesh': 'group-hover:via-yellow-500',
    'CareerChain': 'group-hover:via-slate-500',
}

export default function Project({
    name,
    date,
    description,
    image,
    links,
}: ProjectProps) {
    const router = useRouter()
    return (
        <div className='relative w-full sm:w-[calc(50%-16px)] flex flex-col rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 overflow-hidden m-1 group hover:brightness-105'>
            <Image 
                src={image} 
                width={440} 
                height={280} 
                alt={name} 
                className='object-fill w-full sm:aspect-video sm:h-44 aspect-[9/5] h-auto'
            />
            <div className='flex flex-col flex-grow p-3'>
                <div className='flex-grow'>
                    <div className='flex justify-between items-center mb-2'>
                        <h4 className='font-semibold text-lg tracking-tighter'>{name}</h4>
                        <p className='font-light text-sm tracking-tighter'>{date}</p>
                    </div>
                    <div className='space-y-1'>
                        {description.map((desc, index) => (
                            <p key={index} className='text-sm'>{desc}</p>
                        ))}
                    </div>
                </div>
                <div className='flex gap-2 mt-4'>
                    {Object.entries(links).map(([key, value]) => (
                        <Tag key={key} tag={key} onClick={() => {router.push(value)}} />
                    ))}
                </div>
            </div>

            <div className={clsx("h-2 w-full bg-gradient-to-l from-transparent to-transparent group-hover:blur-xl blur-3xl m-auto rounded transition-all absolute bottom-0", HIGH_LIGHT_COLORS[name])}></div>
            <div className={clsx('w-[70%] h-0.5 left-0 right-0 mx-auto group-hover:w-full bg-gradient-to-l from-transparent to-transparent rounded transition-all absolute bottom-0', HIGH_LIGHT_BOTTOM_MAIN_COLORS[name], HIGH_LIGHT_BOTTOM_SUB_COLORS[name])}/>
        </div>
    )
}
