import React, { useState } from 'react'
import Textinput from '@/Components/Form/Textinput'
import Buttonsubmit from '@/Components/Buttons/Buttonsubmit'
import Api from '@/api/Api'
import Cookies from 'js-cookie'
import { useAuth } from '@/context/Authcontext'
function Login({ setCurrentComponent }) {
    const { login } = useAuth()
    const [processing, setProcessing] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',

    })
    const [errors, setErrors] = useState({
    })

    const handleLogin = (e) => {
        e.preventDefault()
        setProcessing(true)
        login(formData).then(res => {
            setProcessing(false)
        })
            .catch(err => {
                setErrors(err)
                setProcessing(false)
            })
    }
    return (
        <form onSubmit={handleLogin} className=' flex items-center flex-col gap-7 card max-w-xl mx-auto h-full bg-pink-100/20 rounded-md'>
            <div className=' flex flex-col items-center'>
                <nav className=' font-semibold text-2xl'>Welcome</nav>
                <nav className=' font-normal'>Login to continue</nav>
            </div>
            <Textinput error={errors?.email} value={formData.email} onChange={(e) => setFormData((cv) => cv = { ...cv, email: e.target.value })} label="Email" placeholder="user@eamil.com" type="email" />
            <Textinput error={errors?.password} value={formData.password} onChange={(e) => setFormData((cv) => cv = { ...cv, password: e.target.value })} placeholder="password" label="Password" type="password" />
            <Buttonsubmit processing={processing} className="" text="Login" />
            <nav onClick={() => setCurrentComponent('Register')} className="mt-auto text-blue-900 cursor-pointer">
                Create and Account
            </nav>
        </form>
    )
}

export default Login