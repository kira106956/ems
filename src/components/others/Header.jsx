import React from 'react'

const Header = ({ changeUser, data }) => {
    const logOut = () => {
        localStorage.removeItem('loggedInUser')
        changeUser(null)
    }
    return (
        <div className='flex items-center justify-between p-6 bg-[#1c1c1c] rounded-xl mb-8 shadow-sm border border-zinc-800/50'>
            <div>
                <h1 className='text-zinc-400 text-sm font-medium mb-1'>Welcome back,</h1>
                <span className='text-2xl font-bold bg-linear-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent'>
                    {data.firstName || 'Admin'} 👋
                </span>
            </div>
            <button
                className='bg-red-600/10 text-red-500 hover:bg-red-600 hover:text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 border border-red-600/20 hover:border-red-600 text-sm'
                onClick={logOut}
            >
                Log Out
            </button>
        </div>
    )
}

export default Header