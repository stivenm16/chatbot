import { Message } from '../models'
import { Dots } from './Dots'
import { ChatBotAnswer, UserMessage } from './Messages'

interface ChatBodyProps {
  messages: Message[]
  isLoading: boolean
}
export const ChatBody = ({ messages, isLoading }: ChatBodyProps) => {
  return (
    <div className="flex-1 overflow-y-auto p-4  relative">
      <div className="space-y-4">
        {messages.map((message, index) => {
          if (message.rol === 'bot') {
            return <ChatBotAnswer key={index} text={message.text} />
          } else if (message.rol === 'user') {
            return <UserMessage key={index} text={message.text} />
          } else if (message.text === 'carousel' && message.rol === undefined) {
            return (
              <div className="text-black" key={index}>
                Carousel
              </div>
            )
          }
        })}
        {isLoading && <Dots />}
      </div>
    </div>
  )
}
