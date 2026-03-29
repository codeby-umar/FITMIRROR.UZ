import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-700">
          Sahifa topilmadi
        </p>
        <p className="mt-2 text-gray-500">
          Kechirasiz, siz qidirayotgan sahifa mavjud emas.
        </p>

        <Link
          to="/"
          className="inline-block mt-6  bg-blue-600 px-6 py-3 text-white font-medium shadow-md hover:bg-blue-700 transition"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  )
}

export default NotFound