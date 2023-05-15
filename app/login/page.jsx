"use client"
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import React from 'react'
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/ContextProvider';
import { useState,useEffect,useContext } from 'react'
import { account } from '@/appwrite/appwriteconfig';
const Login = () => {
  const {user}=useContext(UserContext)
  const router=useRouter();
    const [login,setLogin]=useState(true);
    useEffect(()=>
    {
      const promise = account.getSession('current');
      promise.then(function (response) {
        router.push("/") // Success
      }, function (error) {
        console.log(error); // Failure
      });
       
    },[])
  return ( 
    <div className='flex flex-col w-full mt-20 justify-center items-center'>
            {
                login?<SignIn setLogin={setLogin} />:<SignUp setLogin={setLogin}/>
            }
    </div>
  )
}

export default Login