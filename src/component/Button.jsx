import React from 'react'

const Button = ({color,title,onClick}) => {
  return (
    <div>
        <button className='btn' onClick={onClick} style={{backgroundColor:color}}>{title}</button>
    </div>
  )
}

export default Button