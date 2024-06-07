export const ChatBody = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4  relative">
      <div className="space-y-4">
        <div className="flex ">
          <div className="p-4 bg-[#f0f1f1] rounded-xl  max-w-[20rem] ">
            <div className="text-xs font-medium text-gray-700">
              Hello there! Do you need any help?
            </div>
            <div className="text-xs text-gray-500 mt-1">10:13AM | Jan 1</div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="bg-[#68c8d1] p-4 rounded-xl max-w-[20rem] ">
            <div className="text-xs font-medium text-gray-700">
              Hey, do you have shipping to Medellín?
            </div>
            <div className="text-xs text-gray-500 mt-1">10:14AM | Jan 1</div>
          </div>
        </div>
      </div>
    </div>
  )
}
