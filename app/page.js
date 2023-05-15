"use client"
import { Inter } from 'next/font/google'
import { useContext } from 'react'
import { UserContext } from '@/context/ContextProvider'
import Navbar from '@/components/Navbar'
export default function Home() {
  const {user}=useContext(UserContext)
  return (
    <main className="">
      
      <div className='mx-auto text-center mt-10'>
        <h2 className='text-4xl text-blue-700 font-bold'>User details</h2>
      </div>
       {
        user?
        <div className='flex justify-center text-black text-center w-[400px] mx-auto mt-5 p-4 flex-col gap-2 bg-yellow-400 rounded-md '>
          <h2 className='font-bold'>Email: <span className='font-normal text-blue-800'>{user.email}</span></h2>
          <h2 className='font-bold'>Userid: <span className='font-normal text-blue-900'>{user.id}</span></h2>
        </div>:<div className='flex justify-center text-black text-center w-[400px] mx-auto mt-5 p-4 flex-col gap-2 bg-yellow-400 rounded-md'>Login to see details of the user</div>
       }
    </main>
  )
}
