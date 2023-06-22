import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { diffForHumans } from '@/api/util'
import Api from '@/api/Api'
import Loadingspinner from '../Spinners/Loadingspinner'
import { useAuth } from '@/context/Authcontext'
function Taskcard({ title, description, dateCreated, canAlter, author, id, isCompleted, setData ,data,fetchData}) {
    const [processing, setProcessing] = useState(false)


  

    const handleOnTaskCompletion = () => {
        setProcessing(true)
        Api.get(`/task/complete/${id}`)
            .then(res => {
                // const newData = data.map(tsk => {
                //     if (tsk.id === id) {
                //       return { ...tsk, isCompleted: true};
                //     }
                //     return tsk;
                //   });
                // console.log(newData)
                // setData(cv=>cv=newData)
                fetchData()
                setProcessing(false)
            })
            .catch(err => {
                setProcessing(false)
                console.log(ree)
            })
    }

    const handleDelete = () => {
        setProcessing(true)
        Api.get(`/task/delete/${id}`)
            .then(res => {
                setProcessing(false)
                setData(cv=>cv = cv.filter(tsk=> tsk.id !== id))
            })
            .catch(err => {
                setProcessing(false)
                console.log(ree)
            })
    }

    return (
        <div className=' p-4 shadow-sm flex flex-col justify-between aspect-square rounded-md border bg-gray-50 relative overflow-hidden'>
            {processing && <nav className=' absolute inset-0 bg-black/10 grid place-items-center'>
                <Loadingspinner />
            </nav>}
            <nav className=' font-bold text-gray-950'>
                {title}
            </nav>
            <nav className=' text-gray-500 font-semibold'>
                {description}
            </nav>
            {canAlter && Boolean(canAlter)
                ?
                <nav className=' flex items-center gap-2 flex-wrap'>
                    {!isCompleted ? <button onClick={()=>handleOnTaskCompletion()} className=' flex items-center gap-2 rounded-full border text-xs px-4 p-2 bg-yellow-50 text-yellow-900 border-yellow-800'>
                        <span className=' h-2 w-2 rounded-full bg-yellow-600'></span>   mark as complete
                    </button> :
                        <button  className=' flex items-center gap-2 rounded-full border text-xs px-4 p-2 bg-green-50 text-green-900 border-green-800'>
                            <span className=' h-2 w-2 rounded-full bg-green-600'></span>   Completed
                        </button>

                    }

                    <button onClick={()=>handleDelete()} className=' flex items-center gap-2 rounded-full border text-xs px-4 p-2 bg-green-50 text-red-900 border-red-800'>
                        <span className=' h-2 w-2 rounded-full bg-red-600'></span>   Delete task
                    </button>
                </nav> :
                <button className='w-full self-center flex items-center gap-2 rounded-full border text-xs px-4 p-2 bg-green-50 text-red-900 border-red-800'>
                    <span className=' h-2 w-2 rounded-full bg-red-600'></span>   In Progress
                </button>
            }
            <nav className=' flex items-center justify-between w-full '>
                <nav className=' text-xs text-gray-600 flex items-center gap-1'>
                    <Icon icon="carbon:time" />
                    {diffForHumans(dateCreated)}
                </nav>
                <nav className=' bg-primary-deep-pink/40 rounded-full text-xs  aspect-square h-8 w-8 grid place-items-center font-semibold text-white'>
                    {author.charAt(0)}
                </nav>
            </nav>
        </div>
    )
}

export default Taskcard