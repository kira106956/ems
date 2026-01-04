import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {
    const { userData } = useContext(AuthContext)
    return (
        <div className='bg-[#1c1c1c] p-5 rounded-xl mt-5 h-96 overflow-hidden border border-zinc-800/50 shadow-lg'>
            <div className='bg-zinc-900 mb-4 py-3 px-4 flex justify-between rounded-lg font-medium text-zinc-400 text-sm'>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5 text-center'>New Task</h3>
                <h5 className='w-1/5 text-center'>Active Task</h5>
                <h5 className='w-1/5 text-center'>Completed</h5>
                <h5 className='w-1/5 text-center'>Failed</h5>
            </div>
            <div className='h-[80%] overflow-auto no-scrollbar space-y-2'>
                {userData.employees.map((e, index) => {
                    return (
                        <div key={index} className='border border-zinc-800 py-3 px-4 flex justify-between rounded-lg items-center hover:bg-zinc-900 transition-colors'>
                            <h2 className='text-lg font-medium w-1/5 text-white'>{e.firstName}</h2>
                            <h3 className='text-lg font-medium w-1/5 text-blue-400 text-center'>{e.tasks.filter(t => t.newTask).length}</h3>
                            <h5 className='text-lg font-medium w-1/5 text-yellow-400 text-center'>{e.tasks.filter(t => t.active).length}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-green-400 text-center'>{e.tasks.filter(t => t.completed).length}</h5>
                            <h5 className='text-lg font-medium w-1/5 text-red-400 text-center'>{e.tasks.filter(t => t.failed).length}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllTask