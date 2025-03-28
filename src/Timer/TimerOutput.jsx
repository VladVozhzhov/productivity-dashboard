const TimerOutput = ({ time, isRunning, selectedSound, handleReset, handleStart, handleStop }) => {
    return (
      <div>
          <div className='mb-4'>
              <p className='text-lg font-medium text-gray-800'>
                  Time Remaining: <span className='text-cyan-600'>{time} seconds</span>
              </p>
          </div>
          <div className='flex justify-center gap-4'>
              <button
                  onClick={handleStart}
                  disabled={isRunning || time === 0 || !selectedSound}
                  className={`px-4 py-2 rounded-lg text-white ${
                      isRunning || time === 0 || !selectedSound
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700 transition'
                  }`}
              >
                  Start
              </button>
              <button
                  onClick={handleStop}
                  disabled={!isRunning}
                  className={`px-4 py-2 rounded-lg text-white ${
                      !isRunning
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-yellow-600 hover:bg-yellow-700 transition'
                  }`}
              >
                  Stop
              </button>
              <button
                  onClick={handleReset}
                  className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
              >
                  Reset
              </button>
          </div>
      </div>
    )
  }
  
  export default TimerOutput;