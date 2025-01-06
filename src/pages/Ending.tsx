import Sections from '@/components/Sections'
import { ArrowDown } from 'lucide-react'
import React from 'react'

export default function Ending() {
  return (
    <Sections>
        <div className='flex flex-col items-center justify-center mt-4' id='projects'>
            <h5 className='text-4xl text-center font-bold'>Get in Touch</h5>
            <p className='text-center text-extra-light-grey my-2'>Want to chat? Feel free to reach out to me via these</p>
            <ArrowDown size={24} className='animate-bounce mt-2'/>
        </div>
    </Sections>
  )
}
