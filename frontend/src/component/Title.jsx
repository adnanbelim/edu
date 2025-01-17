import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='flex items-start my-10'>
      <p className='text-[#0d6efd] font-semibold text-xl md:text-3xl'>{text1} <span className='text-black font-medium'>{text2}</span></p>
    </div>
  )
}

export default Title;