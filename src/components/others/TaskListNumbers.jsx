import React from 'react'

const TaskListNumbers = ({data}) => {
    return (
        <div className='flex gap-2 py-1 text-white'>
            <div className='w-1/2 bg-red-500 py-6 px-9 rounded-2xl'>
                <h2 className='text-3xl font-bold'>{data.tasks.filter(t => t.newTask).length}</h2>
                <h3 className='text-2xl font-semibold'>New Task</h3>
            </div>
            <div className='w-1/2 bg-blue-500 py-6 px-9 rounded-2xl'>
                <h2 className='text-3xl font-bold'>{data.tasks.filter(t => t.active).length}</h2>
                <h3 className='text-2xl font-semibold'>Active Task</h3>
            </div>
            <div className='w-1/2 bg-green-500 py-6 px-9 rounded-2xl'>
                <h2 className='text-3xl font-bold'>{data.tasks.filter(t => t.completed).length}</h2>
                <h3 className='text-2xl font-semibold'>Completed Task</h3>
            </div>
            <div className='w-1/2 bg-yellow-500 py-6 px-9 rounded-2xl'>
                <h2 className='text-3xl font-bold'>{data.tasks.filter(t => t.failed).length}</h2>
                <h3 className='text-2xl font-semibold'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers