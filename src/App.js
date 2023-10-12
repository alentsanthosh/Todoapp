import React, { useEffect, useState } from 'react'
import ListItem from './ListItem';
import "./App.css"
function App() {
  const [value,setValue] = useState("");
  const [array,setArray] = useState([

  ]);
  function Addlist(){
    console.log(value);
const newValue = [...array,{value}]
setArray(newValue);
console.log(newValue);
setValue("")
  }
function DeleteList(index){
const arrayvalue = [...array];
arrayvalue.splice(index,1);
setArray(arrayvalue)

}
useEffect(()=>{
document.title = `you have ${array.length} pending tasks`
})
  return (
    <>
    <div>
    <h1 className='head'>TODO  APP</h1>
    <h4 className='sub' style={{color: "white"}}>Shall I remind you something?</h4>
<div className='AddTask'>

<input type='text'  value = {value} placeholder='Enter a note' onChange={(e)=>{setValue(e.target.value)}}/>
<button className='Button' onClick={Addlist}> Add note</button>

</div>
<div>

{
  array.map((note,index)=>{
    return (
<ListItem notes = {note} key={index} DeleteList={DeleteList}/>
  )
  })
}

</div>


    </div>
    </>
  )
}

export default App