import { useState } from 'react'
import { Message } from '../models'
import { getFormattedDate, keywordChat } from '../utils'
import { ArrowDown, EmojiIcon } from './icons'
interface FooterProps {
  addMessage: (text: Message) => void
  isLoading: boolean
}
export const Footer = ({ addMessage, isLoading }: FooterProps) => {
  const [message, setMessage] = useState<Message>()

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage({
      text: e.target.value,
      rol: 'user',
      date: getFormattedDate(),
    })
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateMessages()
    }
  }
  const updateMessages = () => {
    if (message) {
      if (message.text !== keywordChat) {
        addMessage(message)
        setMessage(undefined)
      } else {
        addMessage({
          text: 'carousel',
          rol: undefined,
          date: getFormattedDate(),
        })
      }
      setMessage(undefined)
    }
  }

  return (
    <div className="flex flex-col relative items-center rounded-b-lg shadow-md border-t-2 border-t-gray-300">
      <div className="h-[90%] flex items-center justify-between py-2  w-full px-3">
        <div className="flex gap-4">
          <EmojiIcon />
          <input
            type="text"
            placeholder="Write a message..."
            value={message?.text || ''}
            disabled={isLoading}
            onChange={handleTextChange}
            onKeyDown={handleKeyPress}
            className="flex-1   rounded-lg focus:outline-none text-black text-[10px] "
          />
        </div>
        <button
          className="rounded-full bg-indigo-950 h-6 w-6 flex flex-row justify-center items-center"
          onClick={updateMessages}
        >
          <ArrowDown />
        </button>
      </div>
      <div className="h-8 flex bg-gray-200 rounded-b-lg tracking-wide w-full justify-center  text-gray-400 font-medium  items-center gap-2 text-sm">
        <span className="underline text-[9px]">Powered By Wizybot</span>
        <div className="h-3 w-3 rounded-full bg-gray-300"></div>
      </div>
    </div>
  )
}
