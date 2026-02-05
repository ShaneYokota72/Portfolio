import Sections from '@/components/Sections'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <Sections title='About'>
        <p className='text-extra-light-grey'>
            I'm a Software Engineer @ <Link href="https://www.unifygtm.com/" className="underline">Unify</Link> and a Senior at the University of Southern California majoring in Computer Science✌️.
            
            I love making things that make our life easier with my software engineering skills.   
                    
            In my free time, I enjoy visiting new places, attending hackathons, and hiking.
        </p>
    </Sections>
  )
}
