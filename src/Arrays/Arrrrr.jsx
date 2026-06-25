import React, { useState } from 'react'

function Arrrrr() {
    const[val,setval]= useState([1,2,3,4,5,6])
    const removeLast = () => {
      setval(val.slice(0,-1))
    }
  return (
    <div className='p-5'>
      {val.map((item,i)=>(
        <h1>{item}</h1>
      ))}
    sabse pahle terminal me server ko bnd krana hai crtl + c se
    uske bad
    git add .
    ye command chlana hai
    git commit -m "your message"
    git push 
    ye dono command chlana hai dekho kaise
     <button onClick={removeLast}>click me</button>
    </div>
  )
}

export default Arrrrr;
