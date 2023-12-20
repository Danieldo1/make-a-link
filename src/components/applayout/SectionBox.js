import React from 'react'

const SectionBox = ({children,className='bg-white m-4 ml-10 p-4 shadow-md rounded-lg '  }) => {
  return (
    <div className={className}>
    {children}
    </div>
  )
}

export default SectionBox