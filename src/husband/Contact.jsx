import React, { useState } from 'react'
import Button from './Button'

const Contact = () => {
    const [count, setCount] = useState(0)
    const [error, setError] = useState("")
    const [gayab, setGayab] = useState(false)

    const handleClick = () =>{
        if(count> 10){
            setError("aap 10 se jyada nhi dba skte hai?")
            setGayab(true)
        }
        setCount(count+1)
    }

    return (
        <div className='h-screen w-full p-10'>
            <div className='text-red-500'>{error}</div>
            <div>
                <h1 className='text-4xl font-bold'>{count}</h1>
            </div>
            {!gayab && (
                <button onClick={handleClick}>click</button>
            )}
            {/* <div>
                <Button color="text-red-500" bgColor='bg-yellow-500' title="click" />
                <Button color="text-yellow-500" bgColor='bg-white-500' title="send" />
                <Button color="text-white-500" bgColor='bg-blue-500' title="delete" />
                <Button />
            </div> */}
        </div>
    )
}

export default Contact
