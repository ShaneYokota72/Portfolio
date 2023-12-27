import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterLink from './FooterLink'

export default function Footer() {
  return (
    <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full'>
        <FooterLink href="https://www.linkedin.com/in/shaneyok/" iconlink="/LinkedinIcon.svg" title="@shaneyok"/>
        <FooterLink href="https://github.com/ShaneYokota72" iconlink="/github_logo.svg" title="@ShaneYokota72"/>
    </div>
  )
}
