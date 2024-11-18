import React,{PureComponent} from "react";
export default class Ohyehh extends PureComponent{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render()
    {
        console.log("check-rerendring")
        return(
            <div>
            <h1>pure component in react {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>update</button>
            </div>
        )
    }
}