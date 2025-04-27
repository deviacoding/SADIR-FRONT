import React from 'react'
import Enfant from './Enfant'

const Parent = (props) => {
  return (
    <div>Parent
        <Enfant secret={props.secret} getMessagePetitPetitfils={props.getMessagePetitPetitfils} />
    </div>
  )
}

export default Parent