import React,{useEffect,useState} from "react";
function Red(){
    const[count,setCount]=useState(100)
    const[data,setData]=useState(10)
    useEffect(()=>{
        console.log("useeffect")
    },[data])
    useEffect(()=>{
        console.log("useeffect")
    },[count])
    return(
        <div>
            <h1>count: {count}</h1>
            <h1>data: {data}</h1>
            <button onClick={()=>setCount(count+1)}>tap tap</button>
            <button onClick={()=>setData(data+1)}> tap</button>
        </div>
    )
}
export default Red;