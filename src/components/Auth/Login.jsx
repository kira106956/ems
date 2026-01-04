import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className="flex bg-[#111] h-screen w-screen items-center justify-center p-4">
            <div className="w-full max-w-md bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl rounded-2xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-emerald-500/10 hover:border-emerald-500/20">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold bg-linear-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-2">Welcome Back</h1>
                    <p className="text-zinc-400">Please sign in to continue</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300 block ml-1" htmlFor="email">Email Address</label>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@example.com"
                            className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-100 rounded-xl px-4 py-3 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-300 block ml-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-100 rounded-xl px-4 py-3 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 transform active:scale-[0.98] mt-4"
                    >
                        Log In
                    </button>

                    <div className="mt-6 text-center text-xs text-zinc-500">
                        Demo: <span className="text-emerald-400">admin@example.com</span> (123)
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login