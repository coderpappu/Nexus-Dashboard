import React from 'react'




const Button = ( { color , bgColor, borderRadius, size, text}) => {
  return (
    <button style={ { color, backgroundColor : bgColor, borderRadius}} className = { ` text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  )
}

export default Button