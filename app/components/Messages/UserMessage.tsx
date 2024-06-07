import { Message } from '@/app/models'

export const UserMessage = ({ text }: Message) => {
  return (
    <div className="flex justify-end">
      <div className="bg-[#68c8d1] p-4 rounded-xl max-w-[16rem] ">
        <div className="text-xs font-medium text-gray-700">{text}</div>
        <div className="text-xs text-gray-500 mt-1">10:14AM | Jan 1</div>
      </div>
    </div>
  )
}
