import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { account } from "@/appwrite/appwriteconfig";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
const SignUp = ({setLogin}) => {
  const router=useRouter();
  const [loading,setLoading]=useState();
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const handleSignUp=async (e) =>
  {
    setLoading(true)
    try{
      setLoading(false);
      const res=await account.create(uuidv4(),email,password,name);
      console.log(res);
      const res2=await account.createEmailSession(email,password);
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
      <h2 className='text-4xl font-bold'>Sign Up</h2>
    </div>
    <form action="#" onSubmit={(e) => {e.preventDefault(); handleSignUp()}} className='flex flex-col gap-2 mt-10 w-[70%] justify-center items-center'>
        <input id="name" onChange={(e) =>setName(e.target.value)} className='p-1 w-full border rounded-sm border-black' name="name" type="text" placeholder="Enter Name" />
        <input id="email" onChange={(e) =>setEmail(e.target.value)} className='p-1 w-full border rounded-sm border-black' name="email" type="text" placeholder="Enter Email" />
        <input id="password" onChange={(e)=> setPassword(e.target.value)} className='p-1 w-full border rounded-sm border-black' name="password" type="password" placeholder="Enter Password" />
        <div>
          {
            loading?<Loader />:<button  type="submit" className='bg-blue-900 py-2 px-6 text-white hover:bg-blue-600 rounded-sm'>Sign In</button>
          }
        </div>
        <p>Alrady a member <span onClick={() => setLogin(true)} className='text-blue-500 underline cursor-pointer'>Sign In</span></p>
    </form>
  </div>
  )
}

export default SignUp