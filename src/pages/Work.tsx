import Sections from '@/components/Sections'
import WorkExperience from '@/components/WorkExperience'
import Link from 'next/link'
import React from 'react'

export default function Work() {
  return (
    <Sections title='Work Experience'>
        <div className='flex flex-col gap-3'>
        <WorkExperience 
            imgSrc="/USCLogo.png" 
            companyName="University of Southern California" 
            position="Undergraduate Researcher(Network Reconnaissance Lab)" 
            details={
                <p>
                    Researching in Network Reconnaissance Lab under Dr. Corey Baker
                    <br/>
                    Some work can be found {" "}
                    <Link href="https://github.com/netreconlab" className='underline items-center inline-flex'>
                        <span>here</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-arrow-up-right mt-1" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                        </svg>
                    </Link>
                </p>
            }
            startDate="Sep 2024" 
            endDate="Present"
        />
        <WorkExperience 
            imgSrc="/USCLogo.png" 
            companyName="University of Southern California" 
            position="Undergraduate Teaching Assistant(CS 356 - Computer Systems)" 
            details={
                <p>
                    Course Producer for CSCI 356: Computer Systems
                    <br/>
                    - Hosting weekly office hours to support students in Computer Systems fundamentals.
                </p>
            }
            startDate="Aug 2024" 
            endDate="Present"
        />
        <WorkExperience 
            imgSrc="/LavaLab.jpg" 
            companyName="LavaLab" 
            position="Developer Mentor" 
            details={
                <p>
                    Provided guidance, support, and mentorship for the new LavaLab cohort developers.
                </p>
            }
            startDate="Sep 2024" 
            endDate="Dec 2024"
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
            endDate="Sep 2024"
        />
        <WorkExperience 
            imgSrc="/LavaLab.jpg" 
            companyName="LavaLab" 
            position="Developer" 
            details={
                <p>
                    Built Tinker, a mobile app simplifying property management for landlords, using React Native, Express.js, and Claude API.
                    <br/>
                    <br/>
                    Won Best Pitch Award at LavaLab S24 Demo Night
                </p>
            }
            startDate="Feb 2024" 
            endDate="May 2024"
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
  )
}
