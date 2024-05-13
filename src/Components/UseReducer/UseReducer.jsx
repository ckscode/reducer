import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const UseReducer = () => {
    const [state,dispatch] = useReducer(ReducerAction,0)
    return (
        <div>
            <h1>USeReducer Hook</h1>
            <p>{state}</p>
            <button onClick={()=>dispatch({type:'ADD',payload:5})}>add</button>
            <button onClick={()=>state>0?dispatch({type:'SUB',payload:2}):dispatch({type:'SUB',payload:0})}>sub</button>
            <button onClick={()=>dispatch({type:'RESET',payload:0})}>Reset</button>
        </div>
    );
};

export default UseReducer;