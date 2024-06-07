import { Message, Product } from '../models'
import { Carousel } from './Carousel'
import { Dots } from './Dots'
import { ChatBotAnswer, UserMessage } from './Messages'

interface ChatBodyProps {
  messages: Message[]
  isLoading: boolean
  products: Product[]
}
export const ChatBody = ({ messages, isLoading, products }: ChatBodyProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-4  relative">
      <div className="space-y-4">
        {messages.map((message, index) => {
          return (
            <div key={index}>
              {message.rol === 'bot' && (
                <ChatBotAnswer key={index} text={message.text} />
              )}
              {message.rol === 'user' && (
                <UserMessage key={index} text={message.text} />
              )}
              {message.text === 'carousel' && message.rol === undefined && (
                <div className="text-black text-[10px]" key={index}>
                  {products && <Carousel products={products} />}
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
