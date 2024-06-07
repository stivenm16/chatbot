import { Message } from '@/app/models'
import React from 'react'

export const ChatBotAnswer = ({ text }: Message) => {
  return (
    <div className="p-4 bg-[#f0f1f1] rounded-xl  max-w-[20rem] ">
      <div className="text-xs font-medium text-gray-700">
        Hello there! Do you need any help?
      </div>
      <div className="text-xs text-gray-500 mt-1">10:13AM | Jan 1</div>
    </div>
  )
}
