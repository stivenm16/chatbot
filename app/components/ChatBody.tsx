import { Dots } from './Dots'
import { ChatBotAnswer, UserMessage } from './Messages'

export const ChatBody = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4  relative">
      <div className="space-y-4">
        <div className="flex ">
          <ChatBotAnswer />
        </div>

        <div className="flex justify-end">
          <UserMessage />
        </div>
        <Dots />
      </div>
    </div>
  )
}
