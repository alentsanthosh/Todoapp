import React from 'react'
function ListItem({notes,index,DeleteList}) {
  return (
    <div>
    <div className='ListItem'>
 {notes.value}  
 </div>
 <button className='btn' onClick={()=>{DeleteList(index)}}>Delete</button>
 </div>
  )
}

export default ListItem