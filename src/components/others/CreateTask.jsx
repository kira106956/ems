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
    // console.log(taskTitle, taskDate, taskAssignTo, taskCategory, taskDescription)

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

    // console.log(tasks)

    const data = userData.employees
    data.forEach(e => {
      if (e.firstName == taskAssignTo) {
        e.tasks.push(task)
        // localStorage.setItem('employees', JSON.stringify(data))
        setUserData({ ...userData, employees: data })
      }
    });
    console.log(data)

    setTaskTitle("")
    setTaskDate("")
    setTaskAssignTo("")
    setTaskCategory("")
    setTaskDescription("")
  }
  return (
    <div className='w-full p-10'>
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e) => {
          submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between'>
          <div className='w-1/2'>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <input value={taskTitle} onChange={(e) => {
                setTaskTitle(e.target.value)
              }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Ex. Make a UI design' />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input value={taskDate} onChange={(e) => {
                setTaskDate(e.target.value)
              }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
              <input value={taskAssignTo} onChange={(e) => {
                setTaskAssignTo(e.target.value)
              }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input value={taskCategory} onChange={(e) => {
                setTaskCategory(e.target.value)
              }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
            </div>
          </div>
          <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea value={taskDescription} onChange={(e) => {
              setTaskDescription(e.target.value)
            }}
              className='w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400 bg-transparent' name="" id="" cols="30" rows="10"></textarea>
            <button className='bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full h-11'>Create Task</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateTask