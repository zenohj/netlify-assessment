import React from 'react'

const UsersPage = () => {
  return (
    <main className="min-h-screen bg-konohaGreen text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-hokageOrange mb-4 tracking-widest">
        Rankings
      </h1>
      <p className="text-lg text-gray-100 italic mb-6">
        Apologies for the not having the best design
      </p>

      <div className="bg-chakraPurple p-6 rounded-xl shadow-lg border-4 border-sharinganRed w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-4">Favorites</h2>
        <ul className="list-decimal list-inside space-y-2 text-gray-100">
          <li>Dig through server logs to troubleshoot a customer's website behavior</li>
          <li>Write and maintain Support Guides for our product</li>
          <li>Debug a customer's build using a programming language and framework that you've never seen before</li>
          <li>Submit bug reports and potentially bug fixes</li>
          <li>Set up your own copy of several site frameworks for debugging</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">Least Favorites</h2>
        <ul className="list-decimal list-inside space-y-2 text-gray-100">
          <li>Respond to Netlify customers on Twitter</li>
          <li>Respond to 20+ support requests via email every day</li>
          <li>Manage a Support team</li>
          <li>Work with prospective customers to explain our service and the pricing model</li>
          <li>Help manage communications during a service outage</li>
        </ul>
      </div>
    </main>
  )
}

export default UsersPage