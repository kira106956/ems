import React from 'react'

const Header = ({changeUser, data}) => {
    const logOut = () => {
        localStorage.removeItem('loggedInUser')
        changeUser(null)
    }
    return (
        <div className='flex items-end justify-between text-white mb-1.5'>
            <h1>Hello, <br />
                <span className='text-2xl font-medium'>{data.firstName} 🔥</span>
            </h1>
            <button className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-xl' onClick={logOut}> 
                Log out
            </button>
        </div>
    )
}

export default Header