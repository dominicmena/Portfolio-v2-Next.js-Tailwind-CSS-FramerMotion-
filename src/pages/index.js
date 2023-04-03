import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from './components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/d1.jpeg'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from './components/Icons'
import Footer from './components/Footer'
import HireMe from './components/HireMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
       <Layout className='pt-0'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
            <Image src={profilePic} alt='DominicMena' className='w-auto h-full'/>
          </div>
          <div className='w-1/2 flex flex-col items-center self-center'>
            <AnimatedText text='Software Engineer' className='!text-6xl !text-left'/>
            <p className='my-4 text-base font-medium'>
          Dominic Mena was born and raised in El, Paso TX - A lifelong learner, he recieved his B.A. in Philosophy from Arizona State and went on to work for DoorDash in it's start-up days - scaling up multiple facets of the company for 5+ years.  When not researching new methods for code; Playing music, going for runs, reading and spending time with my girlfriend are favorite pastimes.
        </p>
        <div className='flex items-center self-start mt-2'>
          <Link href='/dummy.pdf' target={'_blank'}
          className='flex items-center bg-dark text-light p-2.5 px-6
          rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
          border=2 border-solid border-transparent hover:border-dark
          '
          download={true}
          >Resume <LinkArrow  className={'w-6 ml-1'}/>
          </Link>
          <Link href='mailto:mena.dominic@gmail.com' target={'_blank'}
          className='ml-4 text-lg font-medium capitalize text-dark underline'>Contact</Link>
        </div>
          </div>
        </div>
       <Footer/>
       </Layout>
       <HireMe/>
      </main>
    </>
  )
}
