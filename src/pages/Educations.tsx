import Education from '@/components/Education'
import Sections from '@/components/Sections'
import React from 'react'

export default function Educations() {
  return (
    <Sections title='Education'>
        <div className='flex flex-col gap-3'>
        <Education 
            imgSrc="/USCLogo.png" 
            companyName="University of Southern California" 
            details="Bachelor of Science in Computer Science" 
            startDate="Aug 2022" 
            endDate="May 2026"
            redirectLink="https://www.cs.usc.edu/"
        />
        <Education 
            imgSrc="/BuildspaceLogo.jpg" 
            companyName="Buildspace" 
            details="s5" 
            startDate="Jun 2024" 
            endDate="Aug 2024"
            redirectLink="https://buildspace.so/"
        />
        </div>
    </Sections>
  )
}
