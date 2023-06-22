import React, { useState } from 'react'
import Formsearchinput from '@/Components/Form/Formsearchinput'
import Taskcard from '@/Components/partials/Taskcard'
import Newtaskmodal from './partials/Newtaskmodal'


function Index() {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className=' constrain  py-5'>
            {showModal && <Newtaskmodal onClose={()=>setShowModal(false)} />}
            <nav className="flex items-center gap-4 w-full">
                <Formsearchinput placeholder="Search task by title..." />
                <button onClick={() => setShowModal(true)} className=' rounded-md p-4 h-full bg-primary-deep-pink text-white whitespace-nowrap px-10  text-sm'>
                    Add New Task +
                </button>
            </nav>
            <section className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5'>
                <Taskcard />
                <Taskcard />
                <Taskcard />
                <Taskcard />
                <Taskcard />
                <Taskcard />
            </section>
        </div>
    )
}

export default Index