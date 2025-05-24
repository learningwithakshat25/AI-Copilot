import React from 'react'
import { RiCompassDiscoverFill } from "react-icons/ri";
import { FaThumbtack } from "react-icons/fa6";
import { RiSideBarFill } from "react-icons/ri";

const Sidebar = ({openToggle, toggle}) => {
  return (
    <div className={` w-full md:w-64 p-4 h-screen flex flex-col gap-2 rounded-md bg-transparent backdrop-blur-2xl fixed left-0 top-0 transform transition-transform duration-1000 z-40 ${
         openToggle ? "translate-x-0" : "-translate-x-full"} `}>
            <div className="header flex flex-row items-end justify-end w-full">
              <RiSideBarFill onClick={toggle} className='text-2xl font-bold cursor-pointer rounded-2xl hover:rounded-md hover:bg-amber-100' />
            </div>
          <div className="card1 flex flex-row gap-3">
            <RiCompassDiscoverFill className='text-2xl' />
            <div className="right">
              <h1>Discover</h1>
              <h2 className='text-sm'>Your daily news and inspiration</h2>
            </div>
          </div>
          <div className="card1 flex flex-row gap-3">
            <FaThumbtack className='text-2xl' />
            <div className="right">
              <h1>Labs</h1>
              <h2 className='text-sm'>Experimental AI initiatives</h2>
            </div>
          </div>
          <div className="conversation flex flex-col gap-3">
            <h1 className='font-semibold'>Conversation</h1>
            <h2 className='text-sm'>Conversations with Copilot will be shown here. Sign in to keep your conversations.</h2>
            <button className='bg-black px-6 py-2 rounded-4xl text-white'>Sign In</button>
          </div>
        </div>
  )
}

export default Sidebar