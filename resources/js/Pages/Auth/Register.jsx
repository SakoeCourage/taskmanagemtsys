import React, { useEffect, useState } from 'react'
import Textinput from '@/Components/Form/Textinput'
import Buttonsubmit from '@/Components/Buttons/Buttonsubmit'
import Api from '@/api/Api'
import {  useSnackbar } from 'notistack'

export default function Register({ setCurrentComponent }) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    const [errors, setErrors] = useState({

    })
    const [processing, setProcessing] = useState(false)
 
    const handleRegister = (e) => {
        e.preventDefault()
        setProcessing(true)
        Api.post('/register', formData)
            .then(res => {
                console.log(res.data)
                setCurrentComponent('Login')
                enqueueSnackbar({variant: 'success',message: "New Account Created"})

            })
            .catch(err => { 
                if (err?.response.status === 422) {
                    setErrors(err?.response?.data?.errors)
                }
                setProcessing(false)
            })
    }

    return (
        <form onSubmit={handleRegister} className=' flex items-center flex-col gap-7 card max-w-xl mx-auto h-full bg-pink-100/20 rounded-md'>
            <div className=' flex flex-col items-center'>
                <nav className=' font-semibold text-2xl'>Register</nav>
                <nav className=' font-normal'>Enter your credentials in the form provided</nav>
            </div>
            <Textinput error={errors?.name} value={formData.name} onChange={(e) => setFormData((cv) => cv = { ...cv, name: e.target.value })} label="User name" placeholder="User name" type="text" />
            <Textinput error={errors?.email} value={formData.email} onChange={(e) => setFormData((cv) => cv = { ...cv, email: e.target.value })} label="Email" placeholder="user@eamil.com" type="text" />
            <Textinput error={errors?.password} value={formData.password} onChange={(e) => setFormData((cv) => cv = { ...cv, password: e.target.value })} placeholder="password" label="Password" type="password" />
            <Textinput value={formData.password_confirmation} onChange={(e) => setFormData((cv) => cv = { ...cv, password_confirmation: e.target.value })} placeholder="Confirm password" label="Confirm password" type="password" />
            <Buttonsubmit processing={processing} className="" text="Login" />
            <nav onClick={() => setCurrentComponent('Login')} className="mt-auto text-blue-900 cursor-pointer">
                Login instead
            </nav>
        </form>
    )
}
