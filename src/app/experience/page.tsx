import ExperienceComponent from '@/components/ExperienceComponent'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience - Shane Yokota',
  description: "Shane Yokota's Experiences",
}

export default function page() {
  return (
    <div>
      <ExperienceComponent  
        compmany='Keepsake' 
        position='Software Developer' 
        date='Sep 2023 - Present' 
        description={<p className='leading-8 mt-4'>
          I joined Keepsake as a software developer in September 2021. Keepsake is a startup that aims to help families manage their important information and memorable stories for generations to come.
          <br/>
          <br/>
          As a software developer at Keepsake, I work on maintaining the Keepsake application, implementing new features, and fixing bugs. 
          <br/>
          <br/>
          So far, I have worked on a variety of tasks. I implemented new designs for critical pages like share and landing page to elevate the user experience. I wrote testing code to enable automatic checks before production, improving quality. I contributed to code reviews, upholding coding standards. Additionally, I modified the backend's flow to tracked entry's create and edit time to provide insights on usage over time. 
        </p>}
      />
      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <ExperienceComponent  
        compmany='EZread' 
        position='Software Engineer Intern' 
        date='Jul 2023 - Sep 2023' 
        description={<p className='leading-8 mt-4'>
          As a software engineer intern at EZread, I worked on their codebase to build a textbook summarization platform optimized for performance, security, and UX. 
          <br/>
          <br/>
          I migrated the React app to a Next.js app, implementing server-side rendering, to improve page loads by 14%. On top of the migration, I implemented lazy image load across the application and optimized metadata tags to improve the SEO score of the website(achieved a 100 on Lighthouse SEO score). 
          <br/>
          <br/>
          On the backend side, I built Node, Express and MongoDB backends to securely store user credentials and data.
        </p>}
      />
      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <ExperienceComponent  
        compmany='DreamCoat Software' 
        position='Software Engineer Intern' 
        date='Mar 2023 - Jul 2023' 
        description={<p className='leading-8 mt-4'>
          Working as a front-end focused intern at DreamCoat Software, I developed an intuitive client sign-up portal to simplify onboarding new users onto their product placement platform. 
          <br/>
          <br/>
          By refactoring page components, I increased rendering speed, preemptively avoiding scale bottlenecks. In addition, to guarantee user data protection, I incorporated authentication protocolsinto the backend system. Collaborating across the stack, I aligned front-end capabilities with back-end needs for a cohesive system.
        </p>}
      />
      <hr className="my-6 border-neutral-100 dark:border-neutral-800"></hr>
      <ExperienceComponent  
        compmany='Blue Panther Media' 
        position='Software Engineer Intern' 
        date='Jan 2023 - Jul 2023' 
        description={<p className='leading-8 mt-4'>
          As a software engineer intern at digital media startup Blue Panther Media, I led front-end development of their company website to boost engagement.
          <br/>
          <br/>
          Building out web pages and adding JavaScript interactivity led to more visitor time on-site. In addition, I was able to Optimizing SEO by editing the metatags on components all accross the website.  
        </p>}
      />
    </div>
  )
}
