import React from 'react'
import CreateTask from '../others/CreateTask'
import Header from '../others/Header'
import AllTask from '../others/AllTask'

const AdminDashboard = ({ changeUser }) => {
  return (
    <div className='min-h-screen w-full p-4 md:p-10 bg-black text-white'>
      <Header changeUser={changeUser} data={{ firstName: 'Admin' }} />
      <div className="space-y-8">
        <CreateTask />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard