import React,{ Component } from "react";
function Names(props){
    return(

        <h1>hello {props.name}</h1>
    )
}


class Yoo extends Component{
    render(){
        return(
        <div>
            <h1>yoyo</h1>
        </div>
        )
    }
}


export default Names;