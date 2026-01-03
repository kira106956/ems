import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: integrate authentication
        console.log('submit', { email, password })
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 p-8 transform transition-transform duration-300 hover:scale-105">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login to your account</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">Email</span>
                        <input
                            required
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                        />
                    </label>

                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">Password</span>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-800"
                        />
                    </label>

                    {/* <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm">
                            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <span className="ml-2 text-gray-600">Remember me</span>
                        </label>

                        <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot?</a>
                    </div> */}

                    <button
                        type="submit"
                        className="w-full inline-flex justify-center items-center rounded-md bg-purple-600 text-white py-2 px-4 text-sm font-medium shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transform transition-transform duration-150 hover:scale-105"
                    >
                        Log in
                    </button>
                </form>

                {/* <p className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
                </p> */}
            </div>
        </div>
    )
}

export default Login