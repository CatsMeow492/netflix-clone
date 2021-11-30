import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-black" >

      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-black"
        style={{
          'background-image':
            'linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/9f09b85f-530e-4090-82c3-a60ea2b3177f/US-en-20211115-popsignuptwoweeks-perspective_alpha_website_small.jpg)',
        }}    
      >
        
        <h1 className="text-5xl font-bold text-white max-w-lg">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="text-2xl text-white my-4 mb-8">
          Watch anywhere. Cancel Anytime.
        </h2>
        <br></br>
        <p className="text-lg text-white">
          Ready to watch? Enter your email to create or restart your membership
        </p>
        
        <div className='flex mt-4'>
          <input placeholder='Email address' className='bg-white p-4 min-w-[400px]' />
          <button onClick={() => signIn()} className='flex items-center bg-[#e50914] text-white text-xl px-8 rounded-sm'>
            Get Started
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor">
            <path strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      
      </main>
    
    </div>
  )
}
