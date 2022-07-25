import React, { useState } from 'react'

export const ChangeText = () => {

    const [text, setText]=useState("")

    const texto = (event)=> {
        setText(event.target.value)
    }

  return (
    <div className='textRepeat'>
        <input type="text" onChange={texto} placeholder='Ingrese nombre...'/>
        <h3>Su nombre es: {text}</h3>

    </div>
  )
}
