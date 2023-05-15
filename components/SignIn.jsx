import { account } from "@/appwrite/appwriteconfig";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Redirect } from "next";
import Loader from "./Loader";
import { UserContext } from "@/context/ContextProvider";
const SignIn = ({setLogin}) => 
{
  const {user,setUser}=useContext(UserContext)
  const router=useRouter()
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);

  
  const handleSignIn=async (e) =>
  {
    setLoading(true)
    try{
      const res=await account.createEmailSession(email,password);
      console.log(res);
      const res2=await account.get();
      setUser({email:res2.email,id:res2.$id})
      setLoading(false)
      e.target.reset();
      router.push("/")
    }catch(err)
    {
      setLoading(false)
      console.log(err)
    }
  }
  return (
    <div className='flex flex-col mx-auto justify-center items-center w-[350px] p-2 py-5 bg-blue-200 rounded-md'>
      <div>
        <h2 className='text-4xl font-bold'>Sign In</h2>
      </div>
      <form action="#" onSubmit={(e)=> {e.preventDefault();handleSignIn(e)}} className='flex flex-col gap-2 mt-10 w-[70%] justify-center items-center' >
          <input id="email" required onChange={(e) => setEmail(e.target.value)} className='p-1 w-full border rounded-sm border-black' name="email" type="text" placeholder="Enter Email" />
          <input id="password" required  onChange={(e) => setPassword(e.target.value)} className='p-1 w-full border rounded-sm border-black' name="password" type="password" placeholder="Enter Password" />
          <div>
            {
              loading?<Loader />:<button  className='bg-blue-900 py-2 px-6 text-white hover:bg-blue-600 rounded-sm'>Sign In</button>
            }   
          </div>
          <p>Not a member <span onClick={() => setLogin(false)} className='text-blue-500 underline cursor-pointer'>Sign Up</span></p>
      </form>
    </div>
  )
}

export default SignIn