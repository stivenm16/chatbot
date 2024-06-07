import { ChatBody, Footer, Header } from './components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="flex flex-col h-[35rem] bg-white rounded-xl">
        <Header />
        <ChatBody />
        <Footer />
      </div>
    </main>
  )
}
