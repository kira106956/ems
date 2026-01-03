import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({changeUser,data}) => {
  console.log(data)
  return (
    <div className='p-10 bg-black h-screen w-screen'>
    <Header changeUser={changeUser} data={data}/>
    <TaskListNumbers data={data}/>
    <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard