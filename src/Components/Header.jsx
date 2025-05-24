"use client"
import { useState } from 'react';
import { RiSideBarFill } from "react-icons/ri";
import Sidebar from './Sidebar';
import Link from 'next/link';


const Header = () => {
  const [open, setopen] = useState(false);
  const toggle = () => {
    setopen(!open);
  }

  return (
    <>
      <div className='w-full h-fit p-3 container mx-auto flex flex-row items-center justify-between '>
        <div className="left flex flex-row items-center justify-center gap-5">
          <RiSideBarFill onClick={toggle} className='text-2xl font-bold cursor-pointer rounded-2xl hover:rounded-md hover:bg-amber-100' />
          <Link href="/Hero"><h1 className='text-2xl font-semibold hover:bg-amber-100 text-amber-900'>AI Copilot</h1>
</Link>
        </div>

        <div className="hidden right md:flex flex-row items-center justify-center gap-8">
          <button className='bg-black hover:bg-neutral-700 cursor-pointer text-white py-2 px-5 rounded-md font-medium'>Login</button>
          <button className='bg-gray-300 py-2 px-5 text-black cursor-pointer hover:bg-gray-400 rounded-md font-medium'>Signup</button>
        </div>
      </div>
      {open ?
        <Sidebar openToggle={open} toggle={toggle} /> : ''}
    </>
  )
}

export default Header