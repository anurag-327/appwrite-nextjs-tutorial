"use client"
import { createContext ,useEffect,useState } from "react";
export const UserContext=createContext();
import { account } from "@/appwrite/appwriteconfig";

export default function ContextProvider({children})
{
    const [user,setUser]=useState();
    useEffect(()=>
        {
            (async function()
            {
                    console.log("hii")
                    try{
                        const res=await account.get();
                        // const res=await account.getSession('current');
                        setUser({email:res.email,id:res.$id})
                        console.log(res)
                    }catch(err)
                    {
                        console.log(err)  
                    }
                    
                }())     
        },[])
    return(
        <UserContext.Provider value={{user,setUser}} >{children}</UserContext.Provider>
    )
}