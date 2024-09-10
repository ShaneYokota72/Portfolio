import Education from '@/components/Education'
import Sections from '@/components/Sections'
import WorkExperience from '@/components/WorkExperience'
import Link from 'next/link'
import { projectArray } from '@/util/projectData'
import Project from '@/components/Project'
import { ArrowDown } from 'lucide-react';
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
      <div>
        <div className='flex-1 flex items-end lg:items-start justify-between gap-2 lg:gap-8 '>
          <div>
            <h1 className='mb-4 text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>hey, I'm Shane 👋</h1>
            <h2 className='text-xl'>
              Software Engineer and Entrepreneur. Check out what I've built {" "}
              <Link href="#projects" className='underline items-center inline-flex gap-1'>
                <span>projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-arrow-up-right mt-1" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                </svg>
              </Link>
            </h2>
          </div>
          <Image src='/ShaneImage.webp' height={160} width={160} alt="Profile Picture" className='w-40 h-40 aspect-square object-fill rounded-full'/>
        </div>
      </div>

      <Sections title='About'>
        <p className='text-light-grey dark:text-extra-light-grey'>
          I'm a Junior at the University of Southern California majoring in Computer Science✌️.
          
          I'm also working with Keepsake, a startup that aims to redefines the estate planning experience for both attorneys and clients.
          
          In my free time, I enjoy visiting new places, attending hackathons, and hiking.
        </p>
      </Sections>
      
      <Sections title='Work Experience'>
        <div className='flex flex-col gap-3'>
          <WorkExperience 
            imgSrc="/USCLogo.png" 
            companyName="University of Southern California" 
            position="Undergraduate Teaching Assistant(CS 356 - Computer Systems)" 
            details={
              <p>
                Course Producer for CSCI 360: Computer Systems
                <br/>
                - Hosting weekly office hours to support students in Computer Systems fundamentals.
              </p>
            }
            startDate="Oct 2024" 
            endDate="Present"
          />
          <WorkExperience 
            imgSrc="/KeepsakeIcon.webp" 
            companyName="Keepsake" 
            position="Software Developer"
            details={
              <p>
                Architecting the core technology behind Keepsake, a modern estate planning platform that redefines the experience for attorneys and their clients, using Next.js/TypeScript and MongoDB. 
                <br/>
                <br/>
                Contributing to new feature development like user dashboard, account sharing, and more, while collaborating with a team of 4 engineers to continuously deliver updates, bug fixes, and enhancements.
              </p>
            }
            startDate="Sep 2023" 
            endDate="Present"
          />
          <WorkExperience 
            imgSrc="/EzreadLogo.jpeg" 
            companyName="EZread" 
            position="Software Engineer Intern" 
            details={
              <p>
                Overhauled the EZread web application - a student-driven platform providing concise summaries of popular textbooks. Migrated the legacy React frontend to Next.js and MUI, creating comprehensive documentation to streamline future onboarding. Also, rebuilt and updated the backend with Node.js, Express.js, and MongoDB to securely store user credentials and textbook summaries.
                <br/>
                <br/>
                Additionally, spearheaded SEO efforts, achieving a perfect 100 Lighthouse score by implementing server-side rendering and custom lazy image loading to optimize page load times for content-heavy pages. 
                <br/>
                <br/>
                Separately, designed and developed the pricing page UI to drive higher conversion rates for the platform.
              </p>
            }
            startDate="Jul 2023" 
            endDate="Oct 2023"
          />
          <WorkExperience 
            imgSrc="/DreamCoatSoftwareLogo.png" 
            companyName="DreamCoat Software" 
            position="Software Engineer Intern" 
            details={
              <p>
                Contributed to the client onboarding process for DreamCoat's product placement technology that dynamically inserts branded products into films and shows based on the viewer. Developed the client signup portal and admin dashboard to view signup information and other vital metrics using React for the frontend and Spring Boot for the backend.
                <br/>
                <br/>
                Furthermore, optimized data handling and state management, reducing page re-rendering by 84% for a seamless user experience.
              </p>
            }
            startDate="Mar 2023" 
            endDate="Jul 2023"
          />
          <WorkExperience 
            imgSrc="/BluePantherMediaLogo.jpeg" 
            companyName="Blue Panther Media" 
            position="Software Engineer Intern" 
            details={
              <p>
                Took a leading role in developing the content distribution website for Blue Panther Media, a prominent media company. Collaborated with two other engineers to design and implement a platform that streamlined the delivery of media content to consumers.
                <br/>
                <br/>
                Specifically, played a pivotal role in architecting and executing the project, facilitating efficient media distribution for the company.
              </p>
            }
            startDate="Jan 2023" 
            endDate="Jul 2023"
          />
        </div>
      </Sections>

      <Sections title='Education'>
        <div className='flex flex-col gap-3'>
          <Education 
            imgSrc="/BuildspaceLogo.jpg" 
            companyName="Buildspace" 
            details="s5" 
            startDate="Jun 2024" 
            endDate="Aug 2024"
            redirectLink="https://buildspace.so/"
          />
          <Education 
            imgSrc="/USCLogo.png" 
            companyName="University of Southern California" 
            details="Bachelor of Science in Computer Science" 
            startDate="Aug 2022" 
            endDate="May 2026"
            redirectLink="https://www.cs.usc.edu/"
          />
        </div>
      </Sections>

      <Sections>
        <div className='flex flex-col items-center justify-center mt-4' id='projects'>
            <h5 className='text-4xl text-center font-bold mb-2'>Check out my recent projects!</h5>
            <p className='text-center text-light-grey dark:text-extra-light-grey'>Here are some of my recent projects!</p>
            <div className='flex flex-wrap gap-4 mt-4'>
              {
                projectArray.slice(0,4).map((project, i) => (
                  <Project
                    key={i}
                    name={project.name}
                    description={project.description}
                    image={project.image}
                    links={project.links}
                  />
                ))
              }
            </div>
        </div>
      </Sections>
      
      <Sections>
        <div className='flex flex-col items-center justify-center mt-4' id='projects'>
            <h5 className='text-4xl text-center font-bold'>Get in Touch</h5>
            <p className='text-center text-light-grey dark:text-extra-light-grey my-2'>Want to chat? Feel free to reach out to me via these</p>
            <ArrowDown size={24} className='animate-bounce mt-2'/>
        </div>
      </Sections>
    </div>
  )
}
