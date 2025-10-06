'use client'

import { useRouter } from 'next/navigation'

const HowiCreated = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/how')}
      className="bg-hokageOrange hover:bg-sharinganRed text-white px-4 py-2 rounded-full font-semibold shadow-md transition-colors"
    >
      How I Created This Site?
    </button>
  )
}

export default HowiCreated