import React from 'react'

interface ExperienceComponentProps {
    compmany: string
    position: string
    date: string
    description: JSX.Element
}

export default function ExperienceComponent( props: ExperienceComponentProps) {
  return (
    <>
        <h2 className='font-medium text-xl mb-2 tracking-tighter'>{props.compmany}</h2>
        <h3 className='text-neutral-600 dark:text-neutral-400 text-sm'>{props.position + ", " + props.date}</h3>
        {props.description}
    </>
  )
}
