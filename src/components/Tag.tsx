import clsx from 'clsx'
import React from 'react'
import { Globe, Github, Chrome, Figma } from 'lucide-react';

interface TagProps {
    tag: string
    onClick?: () => void
}

export default function Tag({
    tag,
    onClick = () => {}
}: TagProps) {
    const getIcon = (tagName: string) => {
        switch (tagName) {
            case 'Github':
                return <Github size={16} className='fill-white dark:fill-black'/>;
            case 'Pitch Deck':
                return <Figma size={16} className='fill-white dark:fill-black'/>;
            case 'Chrome Web Store':
                return <Chrome size={16} className='fill-white dark:fill-black'/>;
            default:
                return <Globe size={16} className='fill-white dark:fill-black'/>;;
        }
    };

    return (
        <div 
            onClick={onClick}
            className={clsx(
                'dark:bg-white bg-black rounded-lg w-fit px-1.5 py-0.5', 
                {'flex items-center gap-1 hover:cursor-pointer hover:bg-opacity-70': typeof onClick === 'function'}
            )}
        >
            {typeof onClick === 'function' && getIcon(tag)}
            <p className='w-fit text-white dark:text-[#111010] font-medium text-sm'>{tag}</p>
        </div>
    )
}