import logo from './logo.svg';
import './App.css';
// import Useme from './user';
import React,{Component} from 'react';
import { useState } from 'react';
import Amkshit from './user';
import Names from './Student.js'
import Yoo from './Student2.js'

function App() {
  return (
    <div className="App">
      
      <Student/>
     
      <Useme/>
      <Ubutton/>
    </div>
    
  );
  
}

function Student(){
  function btn(){
    return(
      alert("hello")
    )
  }
  return(
   <div>
     <h1>Akshit</h1>
     <h2>Rahul</h2>
     <h3>Vishal</h3>
     <button onClick={btn}>click me</button>
     
   </div>
    
  )
}


class Useme extends Component{
  constructor(){
    super();
    this.state={
      name:"amman"
    }
  }
 
  render()
  {
      return(
          <div>
          <h1>Currently persuing btech from dpgitm</h1>
          <h1>Currently persuing btech from sgt</h1>
          <h1>Currently persuing btech from dsd</h1>
          <button onClick={()=>alert("hey")}>click on me </button>
          <Yoo name={this.state.name} />
          <button onClick={()=>this.setState({name:"akshit"})}>updateme</button>
          </div>
      )
  }

}
function Ubutton(){
  let [data,setData]=useState("ravi")
  function updateData(){
    return(
      setData("Akshit")
    )
  }
  return(
    <div>
      <h1>{data}</h1>
    <button onClick={updateData}>UPDATEButton</button>
    <Amkshit/>
    <Names name="akshit"/>
    <Names name="naman"/>
    <Names name="akshay"/>
    
    </div>
  )
}




export default App;
