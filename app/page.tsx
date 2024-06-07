'use client'
import { useState } from 'react'
import { ChatBody, Footer, Header } from './components'
import { Message } from './models'
import { fakeChatBotAnswers } from './utils'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello there! Do you need any help?', rol: 'bot' },
  ])

  const chatBotAnswer = () => {
    const randomIndex = Math.floor(Math.random() * fakeChatBotAnswers.length)
    const randomAnswer = fakeChatBotAnswers[randomIndex]
    setMessages((prevMessages) => [...prevMessages, randomAnswer])
  }

  const addMessage = (message: Message) => {
    if (message.rol == 'user')
      setMessages((prevMessages) => [...prevMessages, message])
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (message.text == 'carousel')
        setMessages((prevMessages) => [...prevMessages, message])
      if (message.text !== 'carousel') chatBotAnswer()
    }, 3000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="flex flex-col h-[35rem] bg-white rounded-xl">
        <Header />
        <ChatBody messages={messages} isLoading={isLoading} />
        <Footer addMessage={addMessage} />
      </div>
    </main>
  )
}
