import React from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
    return (
        <div id='tasklist' className='h-[50vh] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 no-scrollbar'>
            {data.tasks.map((e, index) => {
                if (e.active) {
                    return <AcceptedTask key={index} data={e} />
                }
                if (e.newTask) {
                    return <NewTask key={index} data={e} />
                }
                if (e.completed) {
                    return <CompletedTask key={index} data={e} />
                }
                if (e.failed) {
                    return <FailedTask key={index} data={e} />
                }
            })}
        </div>
    )
}

export default TaskList