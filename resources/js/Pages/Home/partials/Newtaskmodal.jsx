import React, { useState } from 'react'
import Textinput from '@/Components/Form/Textinput'
import Buttonsubmit from '@/Components/Buttons/Buttonsubmit'
import { Icon } from '@iconify/react'
import Api from '@/api/Api'

function NewTaskForm({handleOnSucess}) {
    const [errors, setErrors] = useState({})
    const [processing, setProcessing] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    })



    const handleTodoSubmission = (e) => {
        e.preventDefault()
        setProcessing(true)
        Api.post('/task/new-task', formData)
            .then(res => {
                setProcessing(false)
                handleOnSucess()
            })
            .catch(err => {
                if (err?.response?.status === 422) {
                    setErrors(err?.response?.data?.errors)
                }
                setProcessing(false)
            })
    }
    return <form onSubmit={handleTodoSubmission} action="" className=' flex flex-col gap-7  p-10 rounded-md'>
        <Textinput error={errors?.title} value={formData.title} onChange={(e) => setFormData((cv) => cv = { ...cv, title: e.target.value })} label="Title" placeholder="Task Title" />
        <section className=' w-full'>
            <label className='font-normal text-blue-950  text-sm capitalize ' htmlFor="">Description</label>
            <textarea error={errors?.description} value={formData.description} onChange={(e) => setFormData((cv) => cv = { ...cv, description: e.target.value })} placeholder=' Enter Task description ' rows={5} className=' w-full border p-3 mt-3 focus:outline-red-300 rounded-md focus:outline-none focus:border-none transition-all'>
            </textarea>
            {errors?.description && <span className=' text-xs  text-red-00'>{errors.description}</span>}
            
        </section>
        <Buttonsubmit processing={processing} text="Add Todo" />
    </form>
}


function Newtaskmodal({ onClose,handleOnSucess }) {
    return (
        <div className=' fixed inset-0 bg-black/40 overflow-hidden  z-[60] flex items-center  '>
            <div className=' w-full max-w-3xl mx-auto my-auto bg-white rounded-md shadow-md'>
                <nav className=' border-b px-14 py-4 flex items-center justify-between'>
                    <nav className=' flex items-center gap-2 text-lg text-gray-500'>
                        <Icon icon="bi:plus-circle" />
                        <span className=' font-semibold'>
                            Task
                        </span>
                    </nav>

                    <button onClick={() => onClose()} className=' text-red-600'>
                        <Icon fontSize={20} icon="zondicons:close-solid" />
                    </button>
                </nav>
                <section className=' p-5'>
                    <NewTaskForm handleOnSucess={handleOnSucess} />
                </section>
            </div>
        </div>
    )
}

export default Newtaskmodal