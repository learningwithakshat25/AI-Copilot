import Link from 'next/link';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const page = ({ openToggle }) => {
  return (
    <div className={`w-full h-full container mx-auto flex items-center justify-center py-36  rounded-md`}>
      <div className="main w-full h-full flex flex-col items-center justify-center gap-8">
        <h1 className='text-3xl md:text-6xl font-normal '>Introducing <span className='font-medium text-amber-900'>AI Copilot</span></h1>
        <h4 className='md:px-64 text-center text-sm md:text-md font-sans'>An AI chatbot is a software application that uses artificial intelligence (AI) to interact with users through natural language. Unlike traditional chatbots that rely on rigid rules and scripts, AI chatbots use technologies like Natural Language Processing (NLP) and Machine Learning (ML) to understand user intent, interpret context, and generate human-like responses in real-time.</h4>
        <Link href='/Input'>
          <button className='hover:scale-105  cursor-pointer flex flex-row items-center justify-center gap-2 text-lg rounded-4xl bg-black py-2 px-6 text-white font-medium'>Explore It <MdArrowOutward /></button>
        </Link>
      </div>
    </div>
  )
}

export default page
