import Description from '@/components/How'

export default function HowPage() {
  return (
    <main className="min-h-screen bg-konohaGreen text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-hokageOrange mb-6 tracking-widest">
        How I Created This Site
      </h1>

      <Description />

      <div className="bg-chakraPurple mt-8 p-6 rounded-xl shadow-lg border-4 border-sharinganRed max-w-2xl">
        <p className="text-lg text-gray-100 italic">
          I originally planned to use Node.js. However, since part of the job requirements or preferences stated Next.js, I adapted and quickly gained knowledge about it. I watched a video introduction to understand the dependencies needed to utilize Next.js, and somehow I was able to learn fast. I used VS Code to write the code and Netlify to build and deploy the site.
        </p>
      </div>
    </main>
  )
}