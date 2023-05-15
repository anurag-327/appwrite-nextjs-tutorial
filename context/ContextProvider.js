"use client"
import { createContext ,useEffect,useState } from "react";
export const UserContext=createContext(null);
import { account } from "@/appwrite/appwriteconfig";

export default function ContextProvider({children})
{
    const [user,setUser]=useState();
    useEffect(()=>
        {
            try{
                (async function()
                {
                    const res=await account.get();
                    // const res=await account.getSession('current');
                    setUser({email:res.email,id:res.$id})
                    console.log(res)
                }())   
            }
            catch(err)
            {
                console.log(err)
            }
        },[])
    return(
        <UserContext.Provider value={{user,setUser}} >{children}n</UserContext.Provider>
    )
}