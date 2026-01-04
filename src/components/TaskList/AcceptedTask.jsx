import React from 'react'

const AcceptedTask = ({ data }) => {
  return (
    <div className='relative shrink-0 h-full w-[320px] p-6 bg-[#1c1c1c] rounded-2xl border border-zinc-800 shadow-xl hover:border-emerald-500/50 transition-colors'>
      <div className='flex justify-between items-center mb-6'>
        <span className='px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'>
          {data.category}
        </span>
        <span className='text-xs text-zinc-500 font-medium'>{data.date}</span>
      </div>
      <h2 className='text-2xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2'>{data.title}</h2>
      <p className='text-sm text-zinc-400 leading-relaxed mb-12'>
        {data.description}
      </p>
      <div className='absolute bottom-6 left-6 right-6 flex justify-between gap-3'>
        <button className='w-full bg-emerald-600/20 text-emerald-400 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 hover:text-white transition-all border border-emerald-600/20'>completed</button>
        <button className='w-full bg-red-600/20 text-red-400 py-2 rounded-lg text-sm font-medium hover:bg-red-600 hover:text-white transition-all border border-red-600/20'>failed</button>
      </div>
    </div>
  )
}

export default AcceptedTask
