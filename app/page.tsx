import AnswerCard from '@/components/AnswerCard';
import HowiCreated from '@/components/How';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-konohaGreen text-white flex flex-col items-center justify-center p-8">
      {/* 🏠 Header */}
      <h1 className="text-5xl font-bold text-hokageOrange mb-4 tracking-widest">
        Netlify Assessment
      </h1>
      <p className="text-lg text-gray-100 italic mb-6">
        Welcome to this basic website as part of the assessment
      </p>

      {/* 🔗 Navigation */}
      <Link
        href="/users"
        className="bg-sharinganRed hover:bg-hokageOrange text-white px-6 py-2 rounded-full font-semibold shadow-md mb-8 transition-colors"
      >
        Favorites and least favorite activities
      </Link>

      {/* 📦 Answer Card */}
      <AnswerCard />

      {/* 🧠 Feedback Section */}
      <Section
        title="What did you think of our service during the time you used it?"
        borderColor="border-sharinganRed"
      >
        <p className="text-lg text-gray-100 italic">
          In general it is somehow similar to{' '}
          <a
            href="https://replit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hokageOrange underline hover:text-white"
          >
            Replit
          </a>{' '}
          — however, the interface is easier to access, the page is clean. The feature to import from Git is very useful too, and so is the option to deploy project files manually.
        </p>
      </Section>

      {/* 💻 VS Code Appreciation Section */}
      <Section title="My Favorite Developer Tool" borderColor="border-sharinganRed">
        <p className="text-lg text-gray-100 italic mb-2">
          My favorite technical/developer-focused product — even back to my senior high school and college days — is{' '}
          <a
            href="https://code.visualstudio.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hokageOrange underline hover:text-white"
          >
            Visual Studio Code
          </a>
          .
        </p>
        <p className="text-lg text-gray-100 italic">
          It&apos;s easy to use and highly configurable. I love how extensions are seamlessly integrated, and with the rise of new technologies, Copilot has been integrated — giving programmers, developers, and web designers a boost in productivity. It helps with suggestions for best terms, lines, functions, and even error detection and correction. VS Code makes the coding experience smooth and efficient.
        </p>
      </Section>

      {/* 🌐 DNS Configuration Challenges Section */}
      <Section
        title="Hey? What do you think are two major challenges around DNS configuration for less-technical customers hosting websites?"
        borderColor="border-sharinganRed"
      >
        <p className="text-lg text-gray-100 italic mb-2">
          A delay in troubleshooting will be inevitable when it comes to DNS configuration for less-technical customers. As you explain from basic terms to functionality, they might raise follow-up questions that extend the process.
        </p>
        <p className="text-lg text-gray-100 italic">
          The second challenge is connected: if there&apos;s a delay in troubleshooting or setup, there&apos;s a high chance of failing to deliver solutions in a timely manner — especially when deadlines are involved.
        </p>
      </Section>

      {/* 🔐 Final Security Escalation Section */}
      <Section title="Final Question: Responding to a Severe Security Report" borderColor="border-sharinganRed">
        <p className="text-lg text-gray-100 italic mb-4">
          We understand you don&apos;t know anything about our internal procedures at this stage, but we want you to explain at a high level how you&apos;d react to this situation: You receive a report of a severe security issue on www.netlify.com. You can&apos;t immediately confirm the report, so what steps might you take to investigate or substantiate the report? What might you say to the reporter, even though we haven&apos;t confirmed their assertion yet, that will instill confidence that our business is very concerned about security? You believe there is a reasonable chance the report is correct and the problem is very large and impactful. How might you escalate?
        </p>
        <h3 className="text-xl font-semibold text-hokageOrange mb-2">My Answer</h3>
        <p className="text-lg text-gray-100 italic mb-2">
          First I would acknowledge and thank the user for reaching out to us. I would avoid making statements that could lead to confusion or false assumptions. The safest move would be to let the user know that we will coordinate the report with the appropriate team and assure them that we take security seriously.
        </p>
        <p className="text-lg text-gray-100 italic">
          I would gather more information such as when the issue started, when it last occurred (or if it&apos;s still visible), and then notify our leads and cybersecurity team — if we have one or are allowed to communicate directly.
        </p>
      </Section>

      {/* 🛠️ Site Won’t Build Button */}
      <Link
        href="/site-wont-build"
        className="bg-hokageOrange hover:bg-sharinganRed text-white px-6 py-2 rounded-full font-semibold shadow-md mt-12 transition-colors"
      >
        Site Won&apos;t Build?
      </Link>
    </main>
  );
}

// 🧩 Reusable Section Component
function Section({
  title,
  children,
  borderColor,
}: {
  title: string;
  children: React.ReactNode;
  borderColor: string;
}) {
  return (
    <section className={`mt-12 bg-chakraPurple p-6 rounded-xl shadow-lg border-4 ${borderColor} max-w-2xl`}>
      <h2 className="text-2xl font-bold text-hokageOrange mb-4 tracking-wide">{title}</h2>
      {children}
    </section>
  );
}