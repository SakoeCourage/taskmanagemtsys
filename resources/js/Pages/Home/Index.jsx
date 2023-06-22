import React from 'react'
import Formsearchinput from '@/Components/Form/Formsearchinput'
import Taskcard from '@/Components/partials/Taskcard'



function Index() {
    return (
        <div className=' constrain  py-5'>
            <nav className="flex items-center gap-4 w-full">
                <Formsearchinput placeholder="Search task by title..." />
                <button className=' rounded-md p-4 h-full bg-primary-deep-pink text-white whitespace-nowrap px-10  text-sm'>
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