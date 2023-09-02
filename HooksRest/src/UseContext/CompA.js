import React,{useContext} from 'react'
import { User,Channel } from '../App'
function CompA() {
    const user = useContext(User)
    const channel = useContext(Channel)
  return (
    <div>
      <h1> {user} - {channel}</h1>
    </div>
  )
}

export default CompA
