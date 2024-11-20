import { useState,useMemo } from "react";
function Honey(){
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(10);

    const multicountmemo=useMemo(
        function multicount(){
            console.log("mlticount")
            return(
                count*5
            )
        },[count]
    )
    return(
        <div>
            <h1>usememo hook</h1>
            <h2>count {count}</h2>
            <h2>{multicountmemo}</h2>
            <h2>count2 {count2}</h2>
            <button onClick={()=>setCount(count+1)}>tap</button>
            <button onClick={()=>setCount2(count2*10)}>press</button>
        </div>
    )
}
export default Honey;