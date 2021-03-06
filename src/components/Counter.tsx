// import React, { useReducer } from 'react'

// type StateType = {
//     count: number;
// }

// type ActionType = {
//     type: string;
//     payload: number;
// }

// const initialState = {count: 0}

// function countReducer(state: StateType, action: ActionType) {
//     switch (action.type) {
//         case 'increment':
//             return {count: state.count + action.payload}
//             break;
//         case 'decrement':
//             return {count: state.count - action.payload}
//             break;
//         default:
//             return state
//             break;
//     }
// }

// export default function Counter() {
//     const [state, dispatch] = useReducer(countReducer, initialState)

//     const _increment = () => {
//         dispatch({
//             type: 'increment',
//             payload: 1
//         })
//     }
    
//     const _decrement = () => {
//         dispatch({
//             type: 'decrement',
//             payload: 1
//         })
//     }

//     return (
//         <div>
//             <p>Your count is {state.count}</p>
//             <button onClick={_increment}>increment</button>&nbsp;&nbsp;
//             <button onClick={_decrement}>decrement</button>
//         </div>
//     )
// }


import React, { useReducer } from 'react'

type StateType = {
    count: number;
}

type UpdateActionType = {
    type: 'increment' | 'decrement';
    payload: number;
}

type ResetActionType = {
    type: 'reset';
}

type ActionType = UpdateActionType | ResetActionType;

const initialState = {count: 0}

function countReducer(state: StateType, action: ActionType) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload}
            break;
        case 'decrement':
            return {count: state.count - action.payload}
            break;
        case 'reset':
            return initialState
            break;
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(countReducer, initialState)

    const _increment = () => {
        dispatch({
            type: 'increment',
            payload: 1
        })
    }
    
    const _decrement = () => {
        dispatch({
            type: 'decrement',
            payload: 1
        })
    }
    
    const _reset = () => {
        dispatch({
            type: 'reset'
        })
    }

    return (
        <div>
            <p>Your count is {state.count}</p>
            <button onClick={_increment}>increment</button>&nbsp;&nbsp;
            <button onClick={_decrement}>decrement</button>&nbsp;&nbsp;
            <button onClick={_reset}>reset</button>
        </div>
    )
}
