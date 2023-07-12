import React from 'react'

const Button = ({
    label= 'Button',
    type ='button',
    className='',
    disabled = false
    
}) => {
  return (
    <button type={type} className={`text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none 
    focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600
    dark:hover:bg-blue-700 dark:focus:ring-blue-800  ${className}`}disabled={disabled}>{label}</button>
  )
}

export default Button
