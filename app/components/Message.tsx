import { Message } from '../models'

export const MessageBubble = ({ text, date, rol }: Message) => {
  const bgColor = rol === 'bot' ? 'bg-[#f0f1f1]' : 'bg-[#68c8d1]'
  return (
    <div
      className={`flex ${
        rol == 'bot' ? 'justify-start' : 'justify-end'
      } w-[16rem]`}
    >
      <div className={`${bgColor} p-4 rounded-xl max-w-48  `}>
        <div className="text-xs font-medium text-gray-700">{text}</div>
        <div className="text-xs text-gray-500 mt-1">{date}</div>
      </div>
    </div>
  )
}
