import React from 'react'
import { useState } from 'react'

const State1 = () => {
    const [value, setValue] = useState("")
  return (
    <div className='flex justify-center items-center pt-10'>
        <div className='h-100 w-125 shadow border border-zinc-200 p-5'>
            <input onChange={(e)=>setValue(e.target.value)} type="text" className='p-2 border w-full' /> <br /><br />
            <h1 className='text-xl font-bold capitalize'>{value}</h1>
        </div>
    </div>
  )
}

export default State1 ;
