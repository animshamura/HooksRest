import React from 'react'
import { User, Channel } from '../App'
function CompB() {
  return (
    <div>
<User.Consumer>
    {
        user => {
            return (
            <Channel.Consumer>
                {
                    channel => {
                        return <div> <h1> {user} - {channel}</h1></div>
                    }
                }
            </Channel.Consumer>
            )
        }
    }
</User.Consumer>
    </div>
  )
}

export default CompB
