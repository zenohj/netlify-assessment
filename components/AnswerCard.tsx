import React from 'react'
import HowiCreated from '@/components/How'

const AnswerCard = () => {
  return (
    <div className="bg-konohaGreen text-white p-6 rounded-xl shadow-lg border-4 border-chakraPurple hover:scale-105 transition-transform duration-300">
      <div className="mb-4">
        <h2 className="text-3xl font-bold text-hokageOrange tracking-wide">
          Proceed with Caution :D
        </h2>
        <p className="text-sm text-gray-100 italic">
          The answers must be viewed
        </p>
      </div>
      <HowiCreated />
      <div className="mt-4 flex justify-end">
        <button className="bg-sharinganRed hover:bg-hokageOrange text-white px-4 py-2 rounded-full font-semibold shadow-md">
          Useless Button
        </button>
      </div>
    </div>
  )
}

export default AnswerCard