import React, { useEffect, useState } from 'react'
import Formsearchinput from '@/Components/Form/Formsearchinput'
import Taskcard from '@/Components/partials/Taskcard'
import Newtaskmodal from './partials/Newtaskmodal'
import Api from '@/api/Api'
import Buttonsubmit from '@/Components/Buttons/Buttonsubmit'
import Emptydata from '@/Components/Form/Emptydata'
import { Icon } from '@iconify/react'

function Index() {
    const [showModal, setShowModal] = useState(false)
    const [tasks, setTask] = useState([])
    const [nextPage, setNextPage] = useState(null)
    const [process, setProcessing] = useState(false)

    const getAllTask = (url) => {
        setProcessing(true)
        Api.get(url ?? '/task/all')
            .then(res => {
                const { data, next_page_url } = res.data
                setTask(data)
                setNextPage(next_page_url)
                setProcessing(false)
            })
            .catch(err => {
                console.log(err)
                setProcessing(false)

            })
    }


    const getMoreData = () => {
        Api.get(nextPage)
            .then(res => {
                const { data, next_page_url } = res.data
                setTask(cv => cv = [...cv, ...data])
                setNextPage(next_page_url)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleOnSucess = () => {
        getAllTask()
        setShowModal(false)
    }

    useEffect(() => {
        getAllTask()
    }, [])


    return (
        <div className=' constrain  py-5'>
            {showModal && <Newtaskmodal handleOnSucess={() => handleOnSucess()} onClose={() => setShowModal(false)} />}
            <nav className="flex items-center gap-4 w-full">
                <Formsearchinput getSearchKey={(sk) => getAllTask(`/task/all?search=${sk}`)} placeholder="Search task by title..." />
                <button onClick={() => setShowModal(true)} className=' flex items-center gap-2 rounded-md p-4 h-full bg-primary-deep-pink text-white whitespace-nowrap px-10  text-sm'>
                    Add New Task
                    <Icon fontSize={20} icon="bi:plus-circle" />
                </button>
            </nav>
            <section className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5'>
                {Boolean(tasks.length) &&
                    tasks.map((task, i) => <Taskcard data={tasks} fetchData={() => getAllTask()} setData={setTask}
                        key={i}
                        id={task.id}
                        dateCreated={task.created_at}
                        title={task.title}
                        description={task.description}
                        canAlter={task.can_alter}
                        isCompleted={task.is_completed}
                        author={task.author}

                    />)
                }
            </section>
            {tasks.length === 0 && <div className=' w-full min-h-screen flex items-center justify-center '>
                <Emptydata />
            </div>}
            {nextPage && <div className=' flex justify-center mt-10'>
                <button onClick={() => getMoreData()} className=' rounded-2xl bg-primary-deep-pink/10 p-2 px-5 text-primary-deep-pink text-sm'>
                    Load More
                </button>
            </div>}
        </div>
    )
}

export default Index