import clsx from 'clsx'
import React from 'react'

interface SectionsProps {
  title?: string
  children: React.ReactNode,
  className?: string
}

export default function Sections({
  title,
  children,
  className
}: SectionsProps) {
  return (
    <div className={clsx(className)}>
      {
        title && 
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
      }
      {children}
    </div>
  )
}