import logo from './logo.svg';
import './App.css';
// import Useme from './user';
import React,{Component} from 'react'

function App() {
  return (
    <div className="App">
      
      <Student/>
      <Useme/>
    </div>
    
  );
  
}

function Student(){
 
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
  render()
  {
      return(
          <div>
          <h1>Currently persuing btech from dpgitm</h1>
          <h1>Currently persuing btech from sgt</h1>
          <h1>Currently persuing btech from dsd</h1>
          <button onClick={()=>alert("hey")}>click on me </button>
          </div>
      )
  }

}
function btn(){
  return(
    alert("hello")
  )
}




export default App;
