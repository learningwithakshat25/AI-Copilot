"use client"
import React, { useState } from 'react'
import { RiH2 } from 'react-icons/ri';


const page = () => {
 const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      submitValue();
    }
  };

  const submitValue = () => {
    if (inputValue.trim() !== '') {
      setSubmittedValue(inputValue);
      setInputValue('');
      
    }
  };

  return (
    <div className='w-full container mx-auto h-screen flex flex-col items-center justify-center gap-10 md:p-6'>
      {submittedValue ? 
      <h1 className='hidden text-3xl md:text-6xl text-amber-950 py-20'>It's Great To See You!</h1> : <h1 className=' text-3xl md:text-6xl text-amber-950 py-20'>It's Great To See You!</h1>
      }
      {submittedValue ?
      <div className='w-full flex flex-col items-end justify-end md:px-52'>
      <h2 className='py-2 px-5 bg-amber-950 text-white font-medium rounded-2xl text-lg '>{submittedValue}</h2>
      </div> : ''
      }
      {submittedValue ?
      <div className='w-full flex flex-col items-start justify-start md:px-52'>
      <h2 className='text-amber-950 text-lg font-medium '>Hey there! How’s your day going?.</h2>
      </div> : ''
      }
      <div className="lower w-full h-fit flex flex-col md:px-52 items-center justify-center gap-5 ">
        
      <div className="input w-full h-full flex flex-row items-center justify-center gap-3">
        <input onKeyDown={handleKeyDown}  className='p-2 shadow-sm shadow-black rounded-2xl h-16 w-full' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Ask Whatever You Think...' />
        <button onClick={submitValue} className='h-16 py-2 px-5 bg-black text-white rounded-2xl cursor-pointer'>Search</button>
      </div>
      <div className="w-full tags flex flex-row items-center justify-center gap-5">
          <h1 className='py-2 md:px-5 px-3 bg-transparent shadow-sm shadow-amber-950 rounded-4xl'>Trending</h1>
          <h1 className='py-2 md:px-5 px-3 bg-transparent shadow-sm shadow-amber-950 rounded-4xl'>News</h1>
          <h1 className='py-2 md:px-5 px-3 bg-transparent shadow-sm shadow-amber-950 rounded-4xl'>Sports</h1>
          <h1 className='py-2 md:px-5 px-3 bg-transparent shadow-sm shadow-amber-950 rounded-4xl'>Recipe's</h1>
        </div>
      </div>
    </div>
  )
}

export default page