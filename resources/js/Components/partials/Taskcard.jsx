import React from 'react'
import { Icon } from '@iconify/react'

function Taskcard({ title, description, dateCreated, BelongsToAuthor, Author, id }) {
    return (
        <div className=' p-4 shadow-sm flex flex-col justify-between aspect-square rounded-md border bg-gray-50'>
            <nav className=' font-bold text-gray-950'>
                This is Title
            </nav>
            <nav className=' text-gray-500 font-semibold'>
                This is the description of the content and some other thisn
            </nav>
            <nav className=' flex items-center gap-2 flex-wrap'>
                <button className=' flex items-center gap-2 rounded-full border text-xs px-4 p-2 bg-yellow-50 text-yellow-900 border-yellow-800'>
                    <span className=' h-2 w-2 rounded-full bg-yellow-600'></span>   mark as complete
                </button>
                <button className=' flex items-center gap-2 rounded-full border text-xs px-4 p-2 bg-green-50 text-green-900 border-green-800'>
                    <span className=' h-2 w-2 rounded-full bg-green-600'></span>   Completed
                </button>
                <button className=' flex items-center gap-2 rounded-full border text-xs px-4 p-2 bg-green-50 text-red-900 border-red-800'>
                    <span className=' h-2 w-2 rounded-full bg-red-600'></span>   Delete task
                </button>
            </nav>
            <nav className=' flex items-center justify-between w-full '>
                <nav className=' text-xs text-gray-600 flex items-center gap-1'>
                    <Icon icon="carbon:time" />
                    14 days ago
                </nav>
                <nav className=' bg-primary-deep-pink/40 rounded-full text-xs  aspect-square h-8 w-8 grid place-items-center font-semibold text-white'>
                    S
                </nav>
            </nav>
        </div>
    )
}

export default Taskcard