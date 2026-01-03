import React from 'react'
import CreateTask from '../others/CreateTask'
import Header from '../others/Header'
import AllTask from '../others/AllTask'

const AdminDashboard = ({changeUser}) => {
  return (
    <div className='p-10 bg-black h-screen w-screen'>
      <Header changeUser={changeUser}data={{ firstName: 'Admin' }} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard