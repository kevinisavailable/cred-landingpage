import React from 'react'
import './button.css'
const Button = (props) => {
  return (
    <button onClick={props.onClick} className="button" >
        {props.buttonText}
    </button>        
  )
}

export default Button