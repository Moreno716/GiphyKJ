import React, { useState, useEffect } from 'react'
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI'
import messi from '../../../Images/messi.jpg';

export const CounterTen = () => {
  
    const [counter, setCounter] = useState(0)

    const handleDecrement = () => {
      setCounter(counter - 1)
    }
    const handleIncrement = () => {
      setCounter(counter + 1)
    }
    const handleReset = () => {
      setCounter(0)
    }

    useEffect(()=>{
      let imgIlu=document.querySelector(".messi")
      if (counter>=10) {
        imgIlu.classList.add("imgIlu")
      }else{
        imgIlu.classList.remove("imgIlu")
      }
    },[counter])
    
  return (
    <>
      <div className='sectionCounter'>
        <h1 className='h1Counter'>Counter</h1> 
        <h2 className='h2Counter'>{counter}</h2>
        <hr/>
        <div className="buttons">
        
        <ButtonUI textButton="Restar" event={handleDecrement} style="Decrement"/>
        <ButtonUI textButton="Borrar" event={handleReset} style="Reset"/>
        <ButtonUI textButton="Sumar" event={handleIncrement} style="Increment"/>


      </div>
      <hr/> 
      <img src={messi} alt="messi" className='messi' id='ftIlucion'/>
      </div>
      </>
  )
}
