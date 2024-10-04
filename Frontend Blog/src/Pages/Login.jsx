import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Login() {
  const [userCredential, setUserCredential] = useState()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
      setUserCredential(data);
  }



  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
    <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-6">
      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="you@example.com"
          required=""
          {...register("email")}
        />
      </div>
      {/* Password Field */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your password"
          required=""
          {...register("password")}
        />
      </div>
      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
        >
          Login
        </button>
      </div>
    </form>
    {/* Forgot Password Link */}
    <div className="mt-4 text-center">
      <a href="#" className="text-sm text-indigo-600 hover:underline">
        Forgot your password?
      </a>
    </div>
  </div>
</div>

    </>
  )
}
