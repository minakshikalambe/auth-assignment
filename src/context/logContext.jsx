import { createContext,useState } from "react";

export const LogContext=createContext();

export const LogContextProvider=({children})=>{
    const[log,setLog]=useState("in")
    const handleLog=()=>{
        setLog(log==="in"?"out":"in")
    }
    return <LogContext.Provider value={{log,handleLog}}>
         {children}
    </LogContext.Provider>
}
