import React from 'react'



const Button = ({label}) => {
  return (
    <button className='primary w-full inline-flex items-center text-sm justify-center rounded border border-transparent transition-all py-[.875rem] px-3 font-medium text-center' >{label}</button>
  )
}

export default Button