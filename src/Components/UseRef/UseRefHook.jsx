import React, { useEffect, useRef, useState } from 'react';
import UseReducer from '../UseReducer/UseReducer';

const UseRefHook = () => {
    const myRef = useRef();
    const yourRef = useRef();
    const [name,setName] = useState('')
    useEffect(()=>{
        myRef.current.focus()
    },[])

    const handleChange=()=>{
        console.log(myRef.current.value) 
        yourRef.current = myRef.current.value
        setName(myRef.current.value)
    }
    return (
        <div>
            {/* <h1>Using useRef hook</h1>
            <input type="text" placeholder='Enter your name' ref={myRef}/>
            <p>{yourRef.current}</p>
            <button onClick={handleChange}>Click</button>
            <p>{name}</p> */}
            <UseReducer/>
        </div>
    );
};

export default UseRefHook;