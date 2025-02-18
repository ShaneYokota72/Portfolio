"use client"
import React from 'react'
import FooterIcon from '@/components/FooterIcon'

export default function Footer() {
  return (
    <div className='fixed bottom-4 left-0 right-0 flex justify-center'>
      <div className='flex items-center justify-center w-fit px-2 py-2 gap-2 rounded-full border border-neutral-700 bg-neutral-800 drop-shadow-xl hover:gap-6 transition-all duration-500'>
        <FooterIcon iconName='mail' link='mailto:shaneyok72@gmail.com'/>
        <FooterIcon iconName='github' link='https://github.com/ShaneYokota72'/>
        <FooterIcon iconName='linkedin' link='https://www.linkedin.com/in/shaneyok/'/>
        <FooterIcon iconName='twitter' link='https://x.com/shaneyok72'/>
        <FooterIcon iconName='calendly' link='https://calendly.com/shaneyok/30min'/>
      </div>
    </div>
  )
}
