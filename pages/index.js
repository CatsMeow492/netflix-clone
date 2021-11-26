import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-5xl font-bold">Unlimited movies, TV shows, and more.</h1>
      <h2 className="text-2xl">Watch anywhere. Cancel Anytime.</h2><br></br>
      <p className="text-1xl">Ready to watch? Enter your email to create or restart your membership</p>
      <form>
      <input type="email"></input>
      </form>
      </main>
    </div>
  )
}
