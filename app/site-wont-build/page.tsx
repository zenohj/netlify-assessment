export default function SiteWontBuildPage() {
  return (
    <main className="min-h-screen bg-konohaGreen text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-hokageOrange mb-6 tracking-widest text-center">
        Troubleshooting: Site Won’t Build
      </h1>

      <section className="bg-chakraPurple p-6 rounded-xl shadow-lg border-4 border-sharinganRed max-w-2xl">
        <h2 className="text-2xl font-bold text-hokageOrange mb-4 tracking-wide">
          Question
        </h2>
        <p className="text-lg text-gray-100 italic mb-6">
          A customer writes in to Support saying simply that their “site won’t build”. You have access to their build logs, and there you see this error: <strong>Build failed due to a user error: Build script returned non-zero exit code: 2</strong>. You have no more information than this and the site’s source repository is private so you cannot test the build yourself. How would you troubleshoot this issue? What steps would you take? Also, please compose your best customer-facing first response.
        </p>

        <h2 className="text-2xl font-bold text-hokageOrange mb-4 tracking-wide">
          My Answer
        </h2>
        <p className="text-lg text-gray-100 italic mb-4">
          First, the exit code 2 likely points to missing, outdated, or uninstalled dependencies. Since I don’t have more information and the repository is private, I’d suggest the user change the visibility to public. I can guide them on how to do that, or ask if they’re using a different version control handler. If remote troubleshooting is allowed, I’d utilize that option.
        </p>
        <p className="text-lg text-gray-100 italic">
          <strong>Customer-facing response:</strong> Hi, the error code means that your project’s build process failed. Since your repository is set to private, I might not be able to access the code directly for testing and debugging. Please check the build logs for detailed errors, and try running <code>npm run build</code> or your project’s start command locally to identify the issue. If it builds successfully, redeploying it might resolve the problem.
        </p>
      </section>
    </main>
  )
}