'use client'


import ClaimBtn from '@/components/btns/ClaimBtn'
import {useState} from 'react'
import {redirect} from 'next/navigation'
const ClaimForm = ({handleForm, username, session}) => {
    const [created, setCreated] = useState(false)
const handleSubmit = async (formData) => {
    const res = await handleForm(formData)
setCreated(res === false)
if(res){
    redirect('/account/' + formData.get('username'))
}
}
  return (
    <form action={handleSubmit}>
    <h1 className='text-3xl font-bold text-center'>Hello, {session?.user?.name}</h1>
    <p className='text-slate-500 text-center'>Your username is {username}</p>
        <div className='max-w-xs mx-auto'>
    <input 
    name='username'
    type="text" 
    placeholder='Username' 
    className='block p-2 mx-auto my-4 border rounded-lg w-full text-center'
    defaultValue={username}
    />
    {created && (
        <div className='text-center p-2 bg-red-200 border border-red-500 rounded-lg mb-5'>
            <p className='text-red-950'>Username is already in use.</p>
        </div>
    )}
        <ClaimBtn />
        </div>
</form>
  )
}

export default ClaimForm