import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface FooterLinkProps {
    href: string
    iconlink: string
    title : string
}

export default function FooterLink( props: FooterLinkProps) {
  return (
    <Link href={props.href} className='w-full sm:w-calc(50% - 8px) border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 hover:border-2'>
        <div className='flex gap-2 items-center'>
            <Image src={props.iconlink} width={64} height={64} alt="Contact Icon" className='bg-neutral-50 rounded-full'></Image>
            <p className='font-medium text-neutral-900 dark:text-neutral-100'>{props.title}</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
        </svg>
    </Link>
  )
}
