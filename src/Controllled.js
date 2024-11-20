import { useState } from "react";
function Me(){
    const [val,setVal]=useState("")
    return(
        <div>
            <h1>controlled component</h1>
            <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
            <h3>value {val}</h3>
        </div>
    )
}
export default Me;