import React,{Component} from "react";
export default class Amkshit extends Component{
    constructor(){
        super();
        this.state={
            data:"akshit"
        }
    }
    apple()
    {
        this.setState({data:"ram"})
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>tap on me</button>
            </div>
        )
    }
}


