import { useState } from 'react'
import { Message } from '../models'
import { fetchProducts } from '../services'
import { fakeChatBotAnswers } from '../utils'

export const useChat = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<any[]>([])
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello there! Do you need any help?', rol: 'bot' },
  ])

  //Random Bot answer
  const chatBotAnswer = () => {
    const randomIndex = Math.floor(Math.random() * fakeChatBotAnswers.length)
    const randomAnswer = fakeChatBotAnswers[randomIndex]
    setMessages((prevMessages) => [...prevMessages, randomAnswer])
  }

  const addMessage = (message: Message) => {
    if (message.rol == 'user')
      setMessages((prevMessages) => [...prevMessages, message])
    setIsLoading(true)

    //In case the user asks for product recommendations and the products are already loaded
    if (products.length > 0 && message.text == 'carousel') setIsLoading(false)
    
        if (message.text == 'carousel')
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: 'I want product recommendations',
          rol: 'user',
        },
        message,
      ])

    setTimeout(() => {
      setIsLoading(false)
      if (products.length == 0) fetchProducts()?.then((res) => setProducts(res))
      if (message.text !== 'carousel') chatBotAnswer()
    }, 3000)
  }
  return {
    messages,
    isLoading,
    products,
    addMessage,
  }
}
