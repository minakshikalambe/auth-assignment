
import { useContext } from "react"
import { LogContext } from "../context/logContext"
export const Navbar =()=>{
    const{handleLog}=useContext(LogContext)
    const {log}=useContext(LogContext)
    return <nav style={{display:"flex",justifyContent:"end",padding:"15px",fontSize:"30px",
    border:"1px solid red"}}>
        <button onClick={()=>{handleLog()}}> log {log==="in"? "out":"in"}</button>
    </nav>
}