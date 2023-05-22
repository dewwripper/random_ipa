import React, { useState } from 'react'



export const Form = (props: any) => {
  const [isVowelChecked, setIsVowelChecked] = useState<boolean>(false);
  const [isConsonantChecked, setIsConsonantChecked] = useState<boolean>(false);
  const [isAlphabetChecked, setIsAlphabetChecked] = useState<boolean>(false);

  return (
    <form className='w-11/12 -ml-10'>
      <fieldset className='mb-8'>
        <div className='relative border border-gray-700 text-gray-800 bg-white shadow-xl p-2 rounded-lg'>
        <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-500 h-4 w-4"
          checked={isVowelChecked}
        />
        <span className="text-gray-700"> Vowel</span>
      </label>
        </div>
      </fieldset>
      <fieldset className='mb-8'>
        <div className='relative border border-gray-700 text-gray-800 bg-white shadow-xl p-2 rounded-lg'>
        <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-500 h-4 w-4"
          checked={isConsonantChecked}
        />
        <span className="text-gray-700"> Consonant</span>
      </label>
        </div>
      </fieldset>

      <fieldset className='mb-8'>
        <div className='relative border border-gray-700 text-gray-800 bg-white shadow-xl p-2 rounded-lg'>
        <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-500 h-4 w-4"
          checked={isAlphabetChecked}
        />
        <span className="text-gray-700"> Alphabet</span>
      </label>
        </div>
      </fieldset>

      <fieldset>
        <button className='text-white font-bold text-lg bg-gradient-to-r from-orange-400 to-orange-500 rounded-md text-center w-full p-2'>
          <i className="fa-solid fa-magnifying-glass fa-md mr-1"></i> Start
        </button>
      </fieldset>
    </form>
  )
}
