import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ changeUser, data }) => {
  return (
    <div className='min-h-screen w-full bg-black p-4 md:p-10 text-white'>
      <Header changeUser={changeUser} data={data} />
      <div className="space-y-8">
        <TaskListNumbers data={data} />
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard