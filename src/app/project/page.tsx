import Project from '@/components/Project'
import React from 'react'
import { projectArray } from '@/util/projectData'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Shane Yokota',
  description: "Shane Yokota's Projects",
}


export default function page() {
  return (
    <div>
      {projectArray.map( (data, index) => {
          return (
            <Project key={index} name={data.title} description={data.description} image={data.thumbImage} subpageid={data.sublink}/>
          )
      })}
    </div>
  )
}
