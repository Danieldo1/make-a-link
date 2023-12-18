'use client'
import React from 'react'
import {toast} from 'react-hot-toast'

const SuccessToast = ({text}) => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center">Success</h1>
        <p className="text-center">{text}</p>
    </div>
  )
}

export default SuccessToast