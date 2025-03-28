const SelectSound = ({ selectedSound, handleSoundChange }) => {
  return (
    <div className='mb-4'>
        <label className='block font-medium mb-2'>
            Select Sound:
        </label>
        <select
            value={selectedSound}
            onChange={handleSoundChange}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500'
        >
            <option value=''>--Choose a sound--</option>
            <option value='alarm-1.mp3'>Alarm 1</option>
            <option value='alarm-2.mp3'>Alarm 2</option>
            <option value='alarm-3.mp3'>Alarm 3</option>
        </select>
    </div>
  )
}

export default SelectSound
