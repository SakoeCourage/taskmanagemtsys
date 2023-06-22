import React from 'react'
import Textinput from '@/Components/Form/Textinput'
import Buttonsubmit from '@/Components/Buttons/Buttonsubmit'

function Login({setCurrentComponent}) {
  return (
    <div className=' flex items-center flex-col gap-7 card max-w-xl mx-auto h-full bg-pink-100/20 rounded-md'>
        <div className=' flex flex-col items-center'>
            <nav className=' font-semibold text-2xl'>Welcome</nav>
            <nav className=' font-normal'>Login to continue</nav>
        </div>
        <Textinput  label="Email" placeholder="user@eamil.com" type="email" />
        <Textinput placeholder="password" label="Password" type="password" />
        <Buttonsubmit className="" text="Login"/>
        <nav onClick={()=>setCurrentComponent('Register')} className="mt-auto text-blue-900 cursor-pointer">
            Create and Account
        </nav>
    </div>
  )
}

export default Login