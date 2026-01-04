import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [taskAssignTo, setTaskAssignTo] = useState("")
  const [taskCategory, setTaskCategory] = useState("")
  const [taskDescription, setTaskDescription] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()

    const task = {
      title: taskTitle,
      date: taskDate,
      category: taskCategory,
      description: taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    }

    const data = userData.employees
    data.forEach(e => {
      if (e.firstName === taskAssignTo) {
        e.tasks.push(task)
        setUserData({ ...userData, employees: data })
      }
    });

    setTaskTitle("")
    setTaskDate("")
    setTaskAssignTo("")
    setTaskCategory("")
    setTaskDescription("")
  }

  return (
    <div className='w-full'>
      <div className='p-8 bg-[#1c1c1c] rounded-xl shadow-lg border border-zinc-800/50'>
        <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between gap-8 md:gap-0'>
          <div className='w-full md:w-[48%] space-y-4'>
            <div>
              <h3 className='text-sm text-zinc-400 font-medium mb-1'>Task Title</h3>
              <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)}
                className='text-sm py-2 px-3 w-full rounded-lg outline-none bg-zinc-900 border border-zinc-700 placeholder:text-zinc-600 focus:border-emerald-500 transition-colors'
                type="text" placeholder='e.g., UI Design, Backend API' />
            </div>
            <div>
              <h3 className='text-sm text-zinc-400 font-medium mb-1'>Date</h3>
              <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)}
                className='text-sm py-2 px-3 w-full rounded-lg outline-none bg-zinc-900 border border-zinc-700 placeholder:text-zinc-600 focus:border-emerald-500 transition-colors'
                type="date" />
            </div>
            <div>
              <h3 className='text-sm text-zinc-400 font-medium mb-1'>Assign to</h3>
              <input value={taskAssignTo} onChange={(e) => setTaskAssignTo(e.target.value)}
                className='text-sm py-2 px-3 w-full rounded-lg outline-none bg-zinc-900 border border-zinc-700 placeholder:text-zinc-600 focus:border-emerald-500 transition-colors'
                type="text" placeholder='Employee Name' />
            </div>
            <div>
              <h3 className='text-sm text-zinc-400 font-medium mb-1'>Category</h3>
              <input value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}
                className='text-sm py-2 px-3 w-full rounded-lg outline-none bg-zinc-900 border border-zinc-700 placeholder:text-zinc-600 focus:border-emerald-500 transition-colors'
                type="text" placeholder='design, dev, etc.' />
            </div>
          </div>

          <div className='w-full md:w-[48%] flex flex-col items-start'>
            <h3 className='text-sm text-zinc-400 font-medium mb-1'>Description</h3>
            <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
              className='w-full h-56 text-sm py-2 px-3 rounded-lg outline-none bg-zinc-900 border border-zinc-700 placeholder:text-zinc-600 focus:border-emerald-500 transition-colors resize-none'
              cols="30" rows="10"></textarea>
            <button className='w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-lg mt-4 shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.98]'>
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask