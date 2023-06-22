import React from 'react'
import Textinput from '@/Components/Form/Textinput'
import Buttonsubmit from '@/Components/Buttons/Buttonsubmit'

export default function Register({setCurrentComponent}) {
    return (
        <div className=' flex items-center flex-col gap-7 card max-w-xl mx-auto h-full bg-pink-100/20 rounded-md'>
            <div className=' flex flex-col items-center'>
                <nav className=' font-semibold text-2xl'>Register</nav>
                <nav className=' font-normal'>Enter your credentials in the form provided</nav>
            </div>
            <Textinput label="User name" placeholder="User name" type="text" />
            <Textinput label="Email" placeholder="user@eamil.com" type="email" />
            <Textinput placeholder="password" label="Password" type="password" />
            <Textinput placeholder="Confirm password" label="Confirm password" type="password" />
            <Buttonsubmit className="" text="Login" />
            <nav onClick={()=>setCurrentComponent('Login')} className="mt-auto text-blue-900 cursor-pointer">
                Login instead
            </nav>
        </div>
    )
}
