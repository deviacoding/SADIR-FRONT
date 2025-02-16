import React from 'react'

const LiMenu = (props) => {
    // console.log("props.name", props.name)
  return (
    <li>        
        <a className={props.css} href={props.link}>{props.name}</a>
    </li>
  )
}

export default LiMenu