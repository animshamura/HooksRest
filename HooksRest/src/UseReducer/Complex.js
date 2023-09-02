import React, {useReducer} from 'react'
const initial  = {
    fst : 100,
    snd : 200
}
const reducer = (state,action) => {
  switch (action.type){
    case 'increment' : return {...state,fst : state.fst+action.val}
    case 'decrement' : return {...state,fst : state.fst-action.val }
    case 'increment1' : return {...state,snd : state.snd+action.val}
    case 'decrement1' : return {...state,snd : state.snd-action.val }
    case 'reset' : return initial
    case 'default' : return state
  }
}
function Complex() {
 const [count, dispatch] = useReducer(reducer, initial)
  return (
    <div>
        <h2>Count - {count.fst}</h2>
        <h2>Count - {count.snd}</h2>
      <button onClick={()=> dispatch({type : 'increment', val : 10})}> Increment 1st</button>
      <button onClick={()=> dispatch({type : 'decrement', val : 4})}> Decrement 1st</button>
      <button onClick={()=> dispatch({type : 'increment1', val : 10})}> Increment 2nd</button>
      <button onClick={()=> dispatch({type : 'decrement1', val : 4})}> Decrement 2nd</button>
      <button onClick={()=> dispatch({type : 'reset'})}> Reset</button>
      </div>
  )
}

export default Complex