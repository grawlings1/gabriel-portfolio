import React, { useState, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Github, Linkedin, Sparkles, ArrowUp } from "lucide-react";

const Section = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-6xl mx-auto px-4"
    >
      {children}
    </motion.section>
  );
};

const envelopeVariants = {
  hidden: { scale: 0.8, opacity: 0, rotateX: 0 },
  visible: { scale: 1, opacity: 1, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { scale: 0.9, rotateX: 180, opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};

export default function Portfolio() {
  const [opened, setOpened] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Apply stored theme on load
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
document.body.classList.remove("dark");
    }
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 relative overflow-hidden transition-colors duration-700 ease-in-out">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent)]"></div>
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-300 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-blue-300 opacity-10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <AnimatePresence mode="wait">
{!opened && (
        <motion.div
            key="envelope"
            variants={envelopeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="min-h-screen flex items-center justify-center relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpened(true)}
              className="cursor-pointer text-blue-600 dark:text-blue-400 text-center"
            >
              <Mail className="w-24 h-24 mx-auto animate-bounce" />
              <p className="mt-4 text-xl font-semibold">Click the envelope to open</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
{opened && (
        <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="p-4 md:p-8 space-y-20 scroll-smooth relative z-10 motion-safe:animate-fade-in"
          >
            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center space-y-4 relative"
            >
              <motion.div
                className="absolute top-2 right-2 text-yellow-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: [0, 15, -15, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
              >
                <Sparkles />
              </motion.div>
              <img
                src="/1747092306592.jpg"
                alt="Gabriel Rawlings profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
  <Typewriter options={{
  strings: [
    "Gabriel Rawlings",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Enthusiast"
  ],
  autoStart: true,
  loop: true,
  deleteSpeed: 40,
  delay: 50,
  pauseFor: 2000
}} />
</h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-md text-gray-600 dark:text-gray-300 max-w-md italic"
              >
                Software Engineer • Full-Stack Developer • AI Enthusiast
              </motion.p>
              <div className="flex gap-5 text-blue-600 dark:text-blue-400">
                <a href="mailto:gabriel_rawlings@yahoo.com" className="hover:text-blue-800 transition"><Mail /></a>
                <a href="https://github.com/grawlings1" target="_blank" className="hover:text-blue-800 transition"><Github /></a>
                <a href="https://linkedin.com/in/gabriel-rawlings-4b9014221" target="_blank" className="hover:text-blue-800 transition"><Linkedin /></a>
              </div>
            </motion.header>

            <Section>
  <motion.h2
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center mb-4 underline decoration-blue-500"
  >
    About Me
  </motion.h2>
  <p className="text-center leading-relaxed text-gray-700 dark:text-gray-300">
    I'm a detail-oriented Software Engineer with a passion for full-stack development, cloud architecture, and AI integrations.
    Currently completing my B.S. in Computer Science at Georgia State University (GPA: 3.62). I enjoy solving challenging problems,
    building scalable web and mobile apps, and working in fast-paced agile teams.
  </p>
</Section>

<Section>
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center mb-6 underline decoration-purple-500"
  >
    Projects
  </motion.h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
    {[
    {
      title: "PDF Resume Analyzer",
      desc: "React + Express + PostgreSQL app that uses OpenAI to analyze and improve resumes. Features admin dashboard, authentication with Clerk, and deployment to Vercel/Render."
    },
    {
      title: "AI Code Review Bot",
      desc: "GitHub-integrated bot using LangChain, GPT-4, and GitHub Actions. Supports static code analysis via ESLint, Pylint, and TypeScript rules."
    },
    {
      title: "Weatherly Mobile App",
      desc: "Flutter app with Firebase and OpenWeather API. Includes auth, dark/light themes, push alerts, and offline mode."
    },
    {
      title: "Real-Time Chat App",
      desc: "A full-stack chat application built with Socket.io, React, and Node.js. Features real-time messaging, group chats, emoji reactions, and typing indicators."
    },
    {
      title: "Developer Portfolio Generator",
      desc: "CLI tool in Node.js that auto-generates stylish developer portfolios from a JSON config. Exports to HTML/CSS or deploys directly to GitHub Pages."
    },
    {
      title: "Code Snippet Manager",
      desc: "A sleek web app using Next.js + Firebase that allows developers to save, tag, and search code snippets. Supports syntax highlighting and markdown."
    }
  ].map((project, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.03, rotate: [-1, 1, 0] }}
        transition={{ type: "spring", stiffness: 200 }}
        className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-500 transform perspective-1000 hover:rotate-x-2 hover:rotate-y-2 hover:scale-105"
      >
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{project.desc}</p>
      </motion.div>
    ))}
  </div>
</Section>

<Section>
  <motion.h2
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center mb-4 underline decoration-indigo-500"
  >
    Skills
  </motion.h2>
  <p className="text-center text-gray-600 dark:text-gray-400">
    Python, JavaScript, TypeScript, C++, SQL, React, Node.js, FastAPI, PostgreSQL, MongoDB, Firebase, AWS, Docker,
    GitHub Actions, GPT-4, LangChain, Terraform, Kubernetes, Google Cloud, Azure, CI/CD, OAuth2, WebSockets,
    GraphQL, REST APIs, OWASP Top 10, Penetration Testing
  </p>
</Section>

<Section>
  <motion.h2
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center mb-4 underline decoration-amber-500"
  >
    Education
  </motion.h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow"
    >
      <h3 className="text-lg font-semibold">B.S. in Computer Science</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">Georgia State University</p>
      <p className="text-sm text-gray-700 dark:text-gray-300">Expected Graduation: July 2025</p>
      <p className="text-sm text-gray-700 dark:text-gray-300">GPA: 3.62</p>
      <p className="text-sm text-green-600 dark:text-green-400">Dean's List (2023, 2024)</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-5 rounded-xl shadow"
    >
      <h3 className="text-lg font-semibold">
        <a href="https://www.freecodecamp.org/certification/fcc35d5f047-409e-429a-b52e-4e6ecaf17cf6/front-end-development-libraries" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
          Certification: Responsive Web Design
        </a>
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">FreeCodeCamp (2024)</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 italic">Covers HTML5, CSS3, Flexbox, Grid, and Accessibility</p>
    </motion.div>
  </div>
</Section>

<Section>
  <motion.h2
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center mb-4 underline decoration-blue-400"
  >
    Resume
  </motion.h2>
  <div className="text-center">
    <a
      href="/Gabriel_Rawlings.pdf"
      download
      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow hover:scale-105 transition-transform duration-300"
    >
      Download Resume
    </a>
  </div>
</Section>

<Section>
  <motion.h2
    initial={{ opacity: 0, rotateX: -90 }}
    whileInView={{ opacity: 1, rotateX: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center mb-4 underline decoration-green-500"
  >
    Contact
  </motion.h2>
  <p className="text-center">Let's connect! Feel free to reach out via email or LinkedIn.</p>
  <div className="flex justify-center gap-6 mt-4">
    <a
      href="mailto:gabriel_rawlings@yahoo.com"
      className="px-5 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition"
    >
      Email Me
    </a>
    <a
      href="https://linkedin.com/in/gabriel-rawlings-4b9014221"
      target="_blank"
      className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
    >
      LinkedIn
    </a>
  </div>
</Section>

            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition"
              >
                <ArrowUp />
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Light/Dark Mode Toggle */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => {
            const root = document.documentElement;
            const body = document.body;
            const isDark = root.classList.contains("dark");
            if (isDark) {
              root.classList.remove("dark");
              body.classList.remove("dark");
              localStorage.setItem("theme", "light");
            } else {
              root.classList.add("dark");
              body.classList.add("dark");
              localStorage.setItem("theme", "dark");
            }
          }}
          className="p-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border rounded-full shadow hover:scale-105 transition-colors duration-500 ease-in-out"
          aria-label="Toggle Theme"
        >
          🌓
        </button>
      </div>
    </div>
  );
}

