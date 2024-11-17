import React,{useEffect,useState} from "react";
function Red(){
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("useeffect")
    })
    return(
        <div>
            <h1>useeffect in react {count}</h1>
            <button onClick={()=>setCount(count+1)}>tap tap</button>
        </div>
    )
}
export default Red;