import { Component,createRef } from "react";
export default class Ooo extends Component{
    constructor(){
        super();
        this.myRef=createRef();
    }
    getval(){
        this.myRef.current.style.color="red"
        this.myRef.current.style.backgroundColor="black"
    }
    render(){
    return(
        <div>
            <h1>ref use</h1>
            <input type="text" ref={this.myRef}/>
            <button onClick={()=>this.getval()}>hit me</button>
        </div>
    )
    }
}