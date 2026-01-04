import React from 'react'

const TaskListNumbers = ({ data }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
            <div className='bg-red-400 p-8 rounded-xl shadow-lg hover:shadow-red-400/20 transition-all border border-red-500/50'>
                <h2 className='text-4xl font-bold'>{data.tasks.filter(t => t.newTask).length}</h2>
                <h3 className='text-xl font-medium mt-1'>New Task</h3>
            </div>
            <div className='bg-blue-400 p-8 rounded-xl shadow-lg hover:shadow-blue-400/20 transition-all border border-blue-500/50'>
                <h2 className='text-4xl font-bold'>{data.tasks.filter(t => t.active).length}</h2>
                <h3 className='text-xl font-medium mt-1'>Active Task</h3>
            </div>
            <div className='bg-green-400 p-8 rounded-xl shadow-lg hover:shadow-green-400/20 transition-all border border-green-500/50'>
                <h2 className='text-4xl font-bold'>{data.tasks.filter(t => t.completed).length}</h2>
                <h3 className='text-xl font-medium mt-1'>Completed Task</h3>
            </div>
            <div className='bg-yellow-400 p-8 rounded-xl shadow-lg hover:shadow-yellow-400/20 transition-all border border-yellow-500/50 text-black'>
                <h2 className='text-4xl font-bold'>{data.tasks.filter(t => t.failed).length}</h2>
                <h3 className='text-xl font-medium mt-1'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers