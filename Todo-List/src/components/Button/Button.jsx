import React from 'react'

const Button = (props) => {
  const {value, handleButton,isDisabled}=props  
  return (
    <button type='button'  disabled={isDisabled}
    className={`pl-4 pr-4 pt-1 pb-1 m-2 text-white
  ${ isDisabled
            ? "bg-zinc-500 cursor-not-allowed "
            : "bg-blue-500 hover:bg-blue-600 "}`} onClick={handleButton}>{value}</button>
  )
}

export default Button