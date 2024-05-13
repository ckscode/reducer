import React, { useReducer } from 'react';
import ReducerAction from './ReducerAction';

const UseReducer = () => {
    const [state,dispatch] = useReducer(ReducerAction,0)
    return (
        <div>
            <h1>USeReducer Hook</h1>
            <p>{state}</p>
            <button onClick={()=>dispatch({type:'ADD',payload:5})}>add</button>
            <button onClick={()=>dispatch({type:'SUB',payload:2})}>sub</button>
        </div>
    );
};

export default UseReducer;