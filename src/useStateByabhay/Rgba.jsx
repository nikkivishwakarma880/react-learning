
import { useState } from "react";

function Rgba() {
const[value,setvalue]=useState("")
  return (
    <div className='flex justify-center items-center pt-5'>
      <div  className='h-100 w-125  border-zinc-100 bg-red-200 rounded-2xl'>
        <input onChange={(e)=>setvalue(e.target.value)} type="text" className='p-4 py-2 px-2 w-full border-2' />
      <h1>{value}</h1>
      </div>

    </div>
  )
}

export default Rgba;
