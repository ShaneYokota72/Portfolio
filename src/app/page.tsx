import IconandInfo from '@/components/IconandInfo'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <h1 className='text-2xl mb-4 font-medium'>hey, I'm Shane 👋</h1>
      <p className='leading-8'>
        I'm a second year student at the 
        &nbsp;<IconandInfo link="https://viterbischool.usc.edu/" iconlink='/usc_logo.svg' alt='usc icon' info='University of Southern California'></IconandInfo>&nbsp;
        majoring in <strong>computer science</strong> and minoring in <strong>entrepreneurship</strong>. I am also working with 
        &nbsp;<IconandInfo link="https://hellokeepsake.com/" iconlink='/keepsakeicon.svg' alt='keepsake icon' info='Keepsake' iconbg={true}></IconandInfo>
        , a startup that aims to help families manage their important information and memorable stories.
        <br/>
        In my free time, I also enjoy visiting new places, attending hackathons, and hiking.
      </p>
      <div className='columns-2 w-full gap-4 mt-8'>
        <div className='relative w-full mb-4'> 
          <Image src="/shaneMtR.JPG" width={500} height={500} alt="Picture of me hiking" className='w-full h-auto rounded-lg object-cover'></Image>
        </div>
        <div className='relative w-full'> 
          <Image src="/shaneNY.jpg" width={500} height={500} alt="Picture of me at New York" className='w-full h-auto rounded-lg object-cover'></Image>
        </div>
        <div className='relative w-full mb-4'> 
          <Image src="/shaneSpaceneedle.JPG" width={500} height={500} alt="Picture of me when I went to Seattle" className='w-full h-auto rounded-lg object-cover'></Image>
        </div>
        <div className='relative w-full'> 
          <Image src="/shaneCalhacks.jpeg" width={500} height={500} alt="Picture of me at CalHacks" className='w-full h-auto rounded-lg object-cover'></Image>
        </div>
      </div>
    </div>

  )
}
