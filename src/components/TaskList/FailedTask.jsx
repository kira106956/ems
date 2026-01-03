import React from 'react'

const FailedTask = ({data}) => {
  return (
     <div className='relative shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-green-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'>
        {data.description}
      </p>
      <div className='absolute bottom-2'>
      <button className='bg-red-600 px-2 py-1 rounded text-sm w-full'>Failed</button>
      </div>
    </div>
  )
}

export default FailedTask
