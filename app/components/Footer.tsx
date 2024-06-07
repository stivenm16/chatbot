import { ArrowDown, EmojiIcon } from './icons'

export const Footer = () => {
  return (
    <div className="flex flex-col relative items-center rounded-b-lg shadow-md border-t-2 border-t-gray-300">
      <div className="h-[90%] flex items-center px-2 py-2">
        <EmojiIcon />
        <input
          type="text"
          placeholder="Write a message..."
          className="flex-1 p-2  rounded-lg focus:outline-none text-black text-sm "
        />
        <button className="rounded-full bg-indigo-950 h-6 w-6 flex flex-row justify-center items-center">
          <ArrowDown />
        </button>
      </div>
      <div className="h-8 flex bg-gray-200 rounded-b-lg tracking-wide w-full justify-center text-[10px] text-gray-400 font-medium  items-center gap-2 text-sm">
        <span className="underline">Powered By Wizybot</span>
        <div className="h-5 w-5 rounded-full bg-gray-300"></div>
      </div>
    </div>
  )
}
