import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'

interface IconandInfoProps {
    link: string,
    iconlink: string,
    alt: string,
    info: string,
    iconbg?: boolean
}

export default function IconandInfo(props: IconandInfoProps) {
  return (
    <span>
        <Link href={props.link} className='border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 gap-2 w-fit text-sm no-underline'>
            <Image src={props.iconlink} alt={props.alt} width={0} height={0} className={clsx("h-[20px] w-auto ml-1 rounded", {"dark:bg-white": props.iconbg})}></Image>
            <span className='py-1 pr-1'>{props.info}</span>
        </Link>
    </span>
  )
}