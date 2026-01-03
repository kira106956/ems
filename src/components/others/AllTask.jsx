import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {
    const {userData, setUserData} = useContext(AuthContext)
    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-0 rounded-xl h-50'>

            <div className='flex justify-between items-center bg-[hsl(0,0%,11%)] rounded-xl p-2 mb-1.5'>
                <h2 className="w-1/5 bg-black">Name</h2>
                <h3 className="w-1/5 bg-black">New Task</h3>
                <h5 className="w-1/5 bg-black">Active Task</h5>
                <h5 className="w-1/5 bg-black">Completed Task</h5>
                <h5 className="w-1/5 bg-black">Failed Task</h5>
            </div>

            <div className="h-[70%] overflow-auto">
            {userData.employees.map((e, index) => {
                return (
                    <div key={index} className='flex justify-between items-center bg-[hsl(0,0%,11%)] rounded-xl p-2 mb-1.5'>
                        <h2 className="w-1/5 bg-black">{e.firstName}</h2>
                        {/* This filter function is used to count the number of tasks in each category, we can also do it manually by using e.taskCounts */}
                        <h3 className="w-1/5 bg-black">{e.tasks.filter(t => t.newTask).length}</h3> 
                        <h5 className="w-1/5 bg-black">{e.tasks.filter(t => t.active).length}</h5>
                        <h5 className="w-1/5 bg-black">{e.tasks.filter(t => t.completed).length}</h5>
                        <h5 className="w-1/5 bg-black">{e.tasks.filter(t => t.failed).length}</h5>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default AllTask