'use client'
import { ChatBody, Footer, Header } from './components'
import { useChat } from './hooks'

export default function Home() {
  const { messages, isLoading, products, addMessage } = useChat()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-300 ">
      <div className="flex flex-col h-[35rem] bg-white rounded-xl shadow-2xl">
        <Header />
        <ChatBody
          messages={messages}
          isLoading={isLoading}
          products={products}
        />
        <Footer addMessage={addMessage} isLoading={isLoading} />
      </div>
    </main>
  )
}
