import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import instImage from '../../../images/loginhero.png'
import { useAuth } from '@/context/Authcontext'
import { Navigate } from 'react-router-dom'

const components = {
    Login: Login,
    Register: Register
}

function Index() {
    const { user } = useAuth()
    const [currentComponent, setCurrentComponent] = useState('Login')
    const Component = components[currentComponent]
    {
        if (!user) {
            return <div>
                <div className='constrain flex p-5 pt-10 items-center '>
                    <img src={instImage} alt="" className=' max-h-[30rem] hidden md:block ' />
                    <div className='w-full'>
                        <Component setCurrentComponent={setCurrentComponent} />
                    </div>
                </div>
            </div>
        }
        else {
            return <Navigate to={window.history.back()} />;
        }

    }
}

export default Index