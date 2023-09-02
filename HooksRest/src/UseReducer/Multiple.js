import React, {useReducer} from 'react'
const initial = 0
const initial2 = 10
const reducer = (state,action) => {
  switch (action){
    case 'increment' : return state+1 
    case 'decrement' : return state-1
    case 'reset' : return initial
    case 'default' : return state
  }
}
const reducer2 = (state,action) => {
    switch (action){
      case 'increment' : return state+10
      case 'decrement' : return state-2
      case 'reset' : return initial
      case 'default' : return state
    }
  }
function Multiple() {
 const [count, dispatch] = useReducer(reducer, initial)
 const [count2, dispatch2] = useReducer(reducer2, initial2)
  return (
    <div>
    <div>
        <h1>Count - {count}</h1>
      <button onClick={()=> dispatch('increment')}> Increment</button>
      <button onClick={()=> dispatch('decrement')}> Decrement </button>
      <button onClick={()=> dispatch('reset')}> Reset</button>
      </div>
      <div>
      <h1>Count Again - {count2}</h1>
    <button onClick={()=> dispatch2('increment')}> Increment</button>
    <button onClick={()=> dispatch2('decrement')}> Decrement </button>
    <button onClick={()=> dispatch2('reset')}> Reset</button>
    </div>
    </div>
  )
}

export default Multiple
