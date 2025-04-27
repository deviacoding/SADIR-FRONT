import React from 'react'
import Parent from './Parent'

const GrandP = (props) => {
  return (
    <div>GrandP
        <Parent 
            secret={props.secret}
            getMessagePetitPetitfils={props.getMessagePetitPetitfils}
        />
    </div>
  )
}

export default GrandP