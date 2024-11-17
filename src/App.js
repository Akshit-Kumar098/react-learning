import logo from './logo.svg';
import './App.css';
// import Useme from './user';
import React, { Component } from 'react';
import { useState } from 'react';
import Amkshit from './user';
import Names from './Student.js'
import Yoo from './Student2.js'
import Profile from './Profile.js';
import Login from './form.js';
import Momos from './Functionasprop.js';

function App() {
  function meaonese(){
    return(
      alert("white meao")
    )
  }
  return (
    <div className="App">
    
      <Student />
     
      <Useme />
      <Ubutton />
      <Input />
      <Peach/>
      <Grapes/>
      <Profile/>
      <Login/>
      <Momos data={meaonese}/>
      <System/>
    </div>

  );

}

function Student() {
  function btn() {
    return (
      alert("hello")
    )
  }
  return (
    <div>
      <h1>Akshit</h1>
      <h2>Rahul</h2>
      <h3>Vishal</h3>
      <button onClick={btn}>click me</button>

    </div>

  )
}


class Useme extends Component {
  constructor() {
    super();
    this.state = {
      name: "amman"
    }
  }

  render() {
    return (
      <div>
        <h1>Currently persuing btech from dpgitm</h1>
        <h1>Currently persuing btech from sgt</h1>
        <h1>Currently persuing btech from dsd</h1>
        <button onClick={() => alert("hey")}>click on me </button>
        <Yoo name={this.state.name} />
        <button onClick={() => this.setState({ name: "akshit" })}>updateme</button>
      </div>
    )
  }

}
function Ubutton() {
  let [data, setData] = useState("ravi")
  function updateData() {
    return (
      setData("Akshit")
    )
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={updateData}>UPDATEButton</button>
      <Amkshit />
      <Names name="akshit" />
      <Names name="naman" />
      <Names name="akshay" />

    </div>
  )
}

function Input(){
  const [data,setdata]=useState(null)
  const [print,setprint]=useState(false)
  function getData(val){
    console.log(val.target.value)
    setdata(val.target.value)
  }
  return(
    <div>
      <h1>input box here</h1>
      {
        print?
        <h2>{data}</h2>
        :null
      }
      <input type='text' onChange={getData}/>
      <button onClick={()=>setprint(true)}>print value</button>
    </div>
  )
}
function Peach(){
  const [status,setStatus]=useState(false)
  return(
      <div>
          {
            status? <h1>Hello world</h1>:null
          }
          <button onClick={()=>setStatus(false)}>Hide</button>
          <button onClick={()=>setStatus(true)}>Show</button>
      </div>
  )
}
function Grapes(){
  const[name,setName]=useState("")
  const[interest,setInterest]=useState("")
  const[tnc,setTnc]=useState(false)
  function getFormData(e){
    console.log(name,interest,tnc)
  e.preventDefault()
  }
  return(
    <div>
      <form onSubmit={getFormData}>
        <input type='text' placeholder='enter your name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>select options</option>
          <option>hiii</option>
          <option>bye</option>
        </select><br/><br/>
        <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)} />Accept t&c<br/><br/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

class System extends Component{
  constructor(){
    super();
    this.state={
      data:"hogya"
    }
  }
  render(){
    return(
      <div>
        <h1>System corrupt {this.state.data} </h1>
      </div>
    )
  }
}


export default App;
