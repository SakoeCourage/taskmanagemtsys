import React from 'react'
import Textinput from '@/Components/Form/Textinput'
import Buttonsubmit from '@/Components/Buttons/Buttonsubmit'
import { Icon } from '@iconify/react'

function NewTaskForm() {
    return <form action="" className=' flex flex-col gap-7  p-10 rounded-md'>
        <Textinput label="Title" placeholder="Todo Title" />
        <section className=' w-full'>
            <label className='font-normal text-blue-950  text-sm capitalize ' htmlFor="">Description</label>
            <textarea placeholder=' Enter todo description ' rows={5} className=' w-full border p-3 mt-3 focus:outline-red-300 rounded-md focus:outline-none focus:border-none transition-all'>
            </textarea>
        </section>
        <Buttonsubmit text="Add Todo" />
    </form>
}


function Newtaskmodal({ onClose }) {
    return (
        <div className=' fixed inset-0 bg-black/40 overflow-hidden  z-[60] flex items-center  '>
            <div className=' w-full max-w-3xl mx-auto my-auto bg-white rounded-md shadow-md'>
                <nav className=' border-b px-14 py-4 flex items-center justify-between'>
                    <nav className=' flex items-center gap-2 text-lg text-gray-500'>
                        <Icon icon="bi:plus-circle" />
                        <span className=' font-semibold'>
                            Todo
                        </span>
                    </nav>

                    <button onClick={()=>onClose()} className=' text-red-600'>
                        <Icon fontSize={20} icon="zondicons:close-solid" />
                    </button>
                </nav>
                <section className=' p-5'>
                    <NewTaskForm />
                </section>
            </div>
        </div>
    )
}

export default Newtaskmodal