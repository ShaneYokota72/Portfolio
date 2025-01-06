'use client'
import Project from '@/components/Project'
import Sections from '@/components/Sections'
import { projectArray } from '@/util/projectData'
import React from 'react'

export default function Projects() {
    const [projectNumber, setProjectNumber] = React.useState(4)
    return (
        <Sections>
            <div className='flex flex-col items-center justify-center mt-4' id='projects'>
                <h5 className='text-4xl text-center font-bold mb-2'>Check out my recent projects!</h5>
                <p className='text-center text-extra-light-grey'>Here are some of my recent projects!</p>
                <div className='flex flex-wrap gap-4 mt-4'>
                {
                    projectArray.slice(0,projectNumber).map((project, i) => (
                        <Project
                            key={i}
                            name={project.name}
                            date={project.date}
                            description={project.description}
                            image={project.image}
                            links={project.links}
                        />
                    ))
                }
                </div>
                <button onClick={() => projectNumber > 4 ? setProjectNumber(projectNumber - 4) : setProjectNumber(projectNumber + 4)} className='bg-neutral-700 text-neutral-200 p-[6px] rounded-lg mt-4 hover:bg-neutral-600 text-sm'>{projectNumber > 4 ? "Hide Some" : "Load More"}</button>
            </div>
        </Sections>
    )
}
