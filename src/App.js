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
   </div>
    
  )
}


class Useme extends Component{
  render()
  {
      return(
          <h1>Currently persuing btech from dpgitm</h1>
      )
  }

}


export default App;
