import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
 //let counter=5;
const addValue=()=>{
  if(counter+1<=20){
   counter=counter+1;
   setCounter(counter);
  }
  else{
    setCounter(0);
  }
}

const removeValue=()=>{
  if(counter==0){
    setCounter(20);
  }
  else
  setCounter(counter-1);
}
  return (
    
      <>
      <h1>Making Counter from 0 to 20 </h1>
      <h2>counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button  onClick={removeValue}>
        
        remove value</button>
      </>
  )
}

export default App
