import { Message } from '@/app/models'
import React from 'react'

export const UserMessage = ({ text }: Message) => {
  return (
    <div className="bg-[#68c8d1] p-4 rounded-xl max-w-[20rem] ">
      <div className="text-xs font-medium text-gray-700">
        {text || 'Hey, do you have shipping to Medellín?'}
      </div>
      <div className="text-xs text-gray-500 mt-1">10:14AM | Jan 1</div>
    </div>
  )
}
