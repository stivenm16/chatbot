import { useEffect, useState } from 'react'
import { Message, Product } from '../models'
import { Carousel } from './Carousel'
import { Dots } from './Dots'
import { MessageBubble } from './Message'

interface ChatBodyProps {
  messages: Message[]
  isLoading: boolean
  products: Product[]
}
export const ChatBody = ({ messages, isLoading, products }: ChatBodyProps) => {
  const [selectedItems, setSelectedItems] = useState<Product[]>([])
  const [carouselVisible, setCarouselVisible] = useState<boolean>(false)

  const selectRandomItems = () => {
    const shuffledArray = products.sort(() => Math.random() - 0.5)
    const randomItems = shuffledArray.slice(0, 3)
    setSelectedItems(randomItems)
    setCarouselVisible(true)
  }

  useEffect(() => {
    if (
      products.length > 0 &&
      messages[messages.length - 1].text === 'carousel'
    ) {
      selectRandomItems()
    }
  }, [messages, products])

  return (
    <div className="flex-1 overflow-y-auto p-4  relative">
      <div className="space-y-4">
        {messages.map((message, index) => {
          return (
            <div key={index}>
              {message.rol !== undefined && <MessageBubble {...message} />}
              {message.text === 'carousel' && message.rol === undefined && (
                <div className="text-black text-[10px]" key={index}>
                  {selectedItems && carouselVisible && (
                    <Carousel products={selectedItems} />
                  )}
                </div>
              )}
            </div>
          )
        })}
        {isLoading && <Dots />}
      </div>
    </div>
  )
}
