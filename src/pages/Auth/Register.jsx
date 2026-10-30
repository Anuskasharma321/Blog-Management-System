import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    
  <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">

      <div className="max-w-lg w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10">

        <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
          Register Here!
        </h1>

        <form className="w-full flex flex-col gap-4">

          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm text-gray-700 dark:text-gray-200 mb-1">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter first name"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm text-gray-700 dark:text-gray-200 mb-1">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter last name"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm text-gray-700 dark:text-gray-200 mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200 mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-200 mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-sm text-gray-700 dark:text-gray-200 mb-1">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm transition duration-200"
          >
            Register
          </button>

        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300">
            Already have an account?
          </span>

          <Link
            to="/Login"
            className="ml-1 text-blue-500 hover:text-blue-600 font-medium"
          >
            Login
          </Link>
        </div>

      </div>
    </div>

  )
}

export default Register
