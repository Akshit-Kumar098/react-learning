import { useRef } from "react";
function Xxx(){
    let akshit=useRef(null)
    function handleInput(){
        akshit.current.style.color="red"
    }
    return(
        <div>
            <h1>useref in react</h1>
            <input type="text" ref={akshit}/>
            <button onClick={()=>handleInput()}>ahh ahh</button>
        </div>
    )
}
export default Xxx;