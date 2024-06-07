import { useState } from 'react'
import { Message, Product } from '../models'
import { fetchProducts } from '../services'
import { fakeChatBotAnswers, getFormattedDate, keywordChat } from '../utils'

export const useChat = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [products, setProducts] = useState<Product[]>([])
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello there! Do you need any help?', rol: 'bot' },
  ])

  //Random Bot answer
  const chatBotAnswer = () => {
    const randomIndex = Math.floor(Math.random() * fakeChatBotAnswers.length)
    const randomAnswer = fakeChatBotAnswers[randomIndex]
    setMessages((prevMessages) => [
      ...prevMessages,
      { ...randomAnswer, date: getFormattedDate() },
    ])
  }

  const addMessage = (message: Message) => {
    const isUserMessage = message.rol === 'user'
    const isCarouselMessage = message.text === 'carousel'
    const areProductsLoaded = products.length > 0

    if (isUserMessage) setMessages((prevMessages) => [...prevMessages, message])
    setIsLoading(true)

    //In case the user asks for product recommendations and the products are already loaded
    if (areProductsLoaded && isCarouselMessage) setIsLoading(false)

    if (isCarouselMessage)
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: keywordChat,
          rol: 'user',
          date: getFormattedDate(),
        },
        message,
      ])

    // This line prevents making a request to the server if the user asks for product recommendations and the products are already loaded
    if (!areProductsLoaded && isCarouselMessage)
      fetchProducts()?.then((res) => setProducts(res))

    setTimeout(() => {
      setIsLoading(false)
      if (!isCarouselMessage) chatBotAnswer()
    }, 3000)
  }
  return {
    messages,
    isLoading,
    products,
    addMessage,
  }
}
