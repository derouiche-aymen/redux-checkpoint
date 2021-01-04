import React from 'react'
import { useState } from 'react';

const Head =()=>{
    const[input,setInput]=useState('')
    return(
        <div>
            <h1>Add tasks</h1>
            <input type='text' placeholder='name a task' onChange={(e)=>setInput(e.target.value)} value={input} />
            <button>ADD</button>
        </div>
    )
}
export default Head