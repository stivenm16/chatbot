import { Message } from '@/app/models'

export const ChatBotAnswer = ({ text }: Message) => {
  return (
    <div className="flex">
      <div className="p-4 bg-[#f0f1f1] rounded-xl  max-w-[16rem] ">
        <div className="text-xs font-medium text-gray-700">
          {text || 'Hello there! Do you need any help?'}
        </div>
        <div className="text-xs text-gray-500 mt-1">10:13AM | Jan 1</div>
      </div>
    </div>
  )
}
