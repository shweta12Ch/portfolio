"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const links = ["Home", "About", "Projects", "Achievements", "Contact"];

  const Section = ({ id, title, children, bg }) => (
    <section
      id={id}
      className={`min-h-screen flex flex-col justify-center items-center py-20 px-6 ${bg}`}
    >
      <h2 className="text-4xl font-extrabold mb-8 text-white drop-shadow-lg">{title}</h2>
      <div className="max-w-4xl w-full text-center text-gray-100">{children}</div>
    </section>
  );

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-gray-800">My Portfolio</h1>
          <ul className="flex gap-6 text-gray-800 font-medium">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-blue-600 transition"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <Link href="/resume.pdf" target="_blank">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                  Resume
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home */}
      <Section id="home" title="Welcome" bg="bg-gradient-to-b from-blue-600 to-indigo-800">
        <div className="flex flex-col items-center">
          {/* Profile Pic */}
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-white">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <p className="text-xl text-white">
            Hi, I’m <span className="font-semibold">Shweta Chauhan</span> 👋  
            A passionate frontend developer building modern web experiences with HTML, CSS, React.js and Next.js.
          </p>
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About Me" bg="bg-gradient-to-b from-indigo-800 to-purple-700">
        <p className="text-lg">
          I specialize in frontend development using HTML, Next.js and Tailwind CSS.  
          I love creating clean, responsive, and user-friendly web apps.  
          Always exploring new design trends ✨.
        </p>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" bg="bg-gradient-to-b from-purple-700 to-pink-600">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/10 border border-white/20 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-semibold text-xl text-white">Frontend Portfolio website using HTML</h3>
            <p className="text-gray-200">Similar to this project but using HTML</p>
          </div>
          <div className="p-6 bg-white/10 border border-white/20 rounded-xl shadow hover:scale-105 transition">
            <h3 className="font-semibold text-xl text-white">Frontend Portfolio website using Next.js</h3>
            <p className="text-gray-200">The one which you viewing right now</p>
          </div>
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Achievements" bg="bg-gradient-to-b from-pink-600 to-red-600">
        <ul className="list-disc list-inside text-left mx-auto max-w-md text-gray-100 space-y-2">
          <div className="w-80 h-60 rectangle overflow-hidden shadow-lg mb-6 border-4 border-white">
            <Image
              src="/cert1.jpg"
              alt="Profile Picture"
              width={480}
              height={480}
              className="object-cover"
            />
          </div>
          <li>NPTEL Online Course Completion on Fundamentals of Object Oriented Programming</li>
          <div className="w-80 h-60 rectangle overflow-hidden shadow-lg mb-6 border-4 border-white">
            <Image
              src="/cert2.jpg"
              alt="Profile Picture"
              width={480}
              height={480}
              className="object-cover"
            />
          </div>
          <li>Hackathon 9.0 by Team SRM Hackathon Participation</li>
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" bg="bg-gradient-to-b from-red-600 to-orange-500">
        <p className="mb-2">
          Email:{" "}
          <a href="mailto:sc3232@srmist.edu.in" className="text-yellow-300 underline">
            sc3232@srmist.edu.in
          </a>
        </p>
        <p className="mb-2">
          LinkedIn:{" "}
          <a
            href="http://linkedin.com/in/shweta-chauhan-8345a3382"
            className="text-yellow-300 underline"
          >
            http://linkedin.com/in/shweta-chauhan-8345a3382
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/shweta12Ch"
            className="text-yellow-300 underline"
          >
            https://github.com/shweta12Ch
          </a>
        </p>
      </Section>
    </>
  );
}
