import { useRef } from "react";
function Bad(){
    let oh=useRef("null")
    function sub(e){
        e.preventDefault();
        console.log("input field value 1 :",oh.current.value)
        let inp=document.getElementById('oooo').value
        console.log("input field value 2:",inp)
    }
    return(
        <div>
            <h1>uncontrolled component</h1>
            <form onSubmit={sub}>
                <input type="text" ref={oh}/><br/><br/>
                <input id="oooo" type="text"/><br/><br/>
                <button>submit</button>
            </form>
        </div>
    )
}
export default Bad;