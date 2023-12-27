import Link from 'next/link'
import React from 'react'

export default function PageHeader() {
  return (
    <nav className='flex gap-6'>
        <Link href="/" className=''>home</Link>
        <Link href="/experience" className=''>experience</Link>
        <Link href="/project" className=''>project</Link>
    </nav>
  )
}
