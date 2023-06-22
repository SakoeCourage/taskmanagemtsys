import React, { useEffect, useState } from 'react'
import Api from '@/api/Api'
import Taskcard from '@/Components/partials/Taskcard'
import Emptydata from '@/Components/Form/Emptydata'

function Index() {
    const [tasks, setTask] = useState([])
    const [nextPage, setNextPage] = useState(null)

    const getMyTask = (url) => {

        Api.get(url ?? '/task/completed-task')
            .then(res => {
                const { data, next_page_url } = res.data
                setTask(data)
                setNextPage(next_page_url)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)

            })
    }

    useEffect(() => {
        getMyTask()
    }, [])

    return (
        <div className=' constrain mx-auto'>
            <section className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5'>
                {Boolean(tasks.length) &&
                    tasks.map((task, i) => <Taskcard data={tasks} fetchData={() => getMyTask()} setData={setTask}
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