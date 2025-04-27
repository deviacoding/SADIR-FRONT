import React from 'react'
import GrandP from './GrandP'
import { useSelector } from 'react-redux'

const ArriereGP = () => {
  const userInfoSouhait = useSelector(state => state.userInfo.souhait)
  return (
    <div>ArriereGP
        <GrandP />
        <div>Si souhait je l'afficherais: {userInfoSouhait}</div>
    </div>
  )
}

export default ArriereGP