import { ArrowDown, CartIcon, UserIcon } from '../icons'
import { Wave } from './Wave'

export const Header = () => {
  return (
    <>
      <Wave>
        <div className="relative flex z-1  justify-between p-4">
          <div className="flex  flex-col">
            <div className="flex  items-center gap-2">
              <UserIcon />
              <div className="flex flex-col">
                <span className="text-[10px]">Chat with </span>
                <span className="font-semibold text-xs">[Chat Name]</span>
              </div>
            </div>
            <div className=" flex items-center gap-3 mt-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="text-[10px]">We reply immediately!</div>
            </div>
          </div>

          <div className="flex space-x-4 justify-center items-center mb-5">
            <CartIcon />
            <ArrowDown />
          </div>
        </div>
      </Wave>
    </>
  )
}
