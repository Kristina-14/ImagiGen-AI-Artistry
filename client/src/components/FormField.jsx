// rafce
import React from 'react'
import { preview } from '../assets'

const FormField = ({lableName, type, name, placeholder, value, 
handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    // <div>FormField</div>
    <div>
      <div className='flex item-center gap-2 mb-2'>
        <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-900'
        >
          {lableName}
        </label>
    {/* added the surpriseme button */}
    {isSurpriseMe && (
      <button
      type='button'
      onClick={handleSurpriseMe}
      className='font-medium text-[13px] bg-[#0c4a6e] py-1 px-2
      rounded-[5px] text-white hover:bg-[#ECECF1] hover:text-black
      '>
        Surprise Me!
      </button>
    )}
      </div>
      {/* To catch the user input */}
      <input 
        type = {type}
        id = {name}
        name = {name}
        value = {value}
        placeholder = {placeholder}
        onChange = {handleChange}
        required

        className='bg-gray-50 border-[2px] border-gray-300
        text-gray-900 text-[12px] rounded-lg focus:ring-[#0c4a6e]
        focus:border-[#0c4a6e] outline-none block w-full p-3'
      />
    </div>
  )
}

export default FormField