const SecondInput = ({ handleTimeChange, handleSetTime, inputTime }) => {
  return (
    <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
            Set Time (seconds):
        </label>
        <div className="flex items-center gap-2">
            <input
                type="number"
                value={inputTime}
                onChange={handleTimeChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
                onClick={handleSetTime}
                className="px-4 py-2 bg-sky-800 text-white rounded-lg hover:bg-sky-900 transition whitespace-nowrap"
            >
                Set Time
            </button>
        </div>
    </div>
  )
}

export default SecondInput
