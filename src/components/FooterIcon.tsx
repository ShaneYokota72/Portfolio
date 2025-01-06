"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Github, Mail } from 'lucide-react'
import Image from 'next/image'

interface FooterIconProps {
    iconName: string
    link: string
}

export default function FooterIcon({
    iconName,
    link
} : FooterIconProps){
    const router = useRouter()
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'github':
                return <Github size={16} className='fill-black'/>
            case 'mail':
                return <Mail size={16} className='fill-black'/>
            case 'linkedin':
                return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-white">
                    <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            case 'calendly':
                return <Image src={'/CalendlyIcon.svg'} height={16} width={16} className="fill-black" alt='caledly icon'/>
            default:
                return null
        }
    }

    return (
        <div 
            onClick={() => {router.push(link)}}
            className='w-8 h-8 aspect-square flex items-center justify-center rounded-full hover:bg-neutral-600'
        >
            {getIcon(iconName)}
        </div>
    )
}
