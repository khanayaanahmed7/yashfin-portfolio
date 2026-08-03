import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-24 pt-32 sm:px-8 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:pb-24 lg:pt-40 xl:gap-16"
      >
        {/* Left Content */}
        <div className="min-w-0">
          <p className="mb-3 text-base font-medium text-blue-400 sm:text-lg">
            Hello, I&apos;m
          </p>

          <h1 className="bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 bg-clip-text text-[clamp(3.4rem,7vw,7.2rem)] font-extrabold leading-[0.92] tracking-tight text-transparent">
            Yashfin Shaikh
          </h1>

          <h2 className="mt-5 text-2xl text-slate-300 sm:text-3xl lg:text-4xl">
            Aspiring QA Engineer
          </h2>

          <p className="mt-3 min-h-8 text-base font-medium text-blue-400 sm:text-lg">
            <Typewriter
              words={[
                "Manual Testing",
                "SDLC & STLC",
                "React.js Developer",
                "AI Applications",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Passionate about ensuring software quality through Manual Testing
            while building modern web applications using React and AI-powered
            solutions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="w-full rounded-xl bg-blue-600 px-8 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-500 sm:w-auto"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="w-full rounded-xl border border-slate-600 px-8 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:bg-slate-800 sm:w-auto"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/shaikhyashfin913-ops"
              target="blank"
              aria-label="GitHub"
              className="text-2xl text-slate-400 transition duration-300 hover:scale-110 hover:text-white sm:text-3xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/yashfin-shaikh-a4b345280/"
              target="blank"
              aria-label="LinkedIn"
              className="text-2xl text-slate-400 transition duration-300 hover:scale-110 hover:text-[#0A66C2] sm:text-3xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:yashfinshaikh77@gmail.com"
              aria-label="Email"
              className="text-2xl text-slate-400 transition duration-300 hover:scale-110 hover:text-red-400 sm:text-3xl"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-slate-500 sm:mt-14">
            <div className="flex h-10 w-6 justify-center rounded-full border border-slate-600">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="mt-2 h-2 w-2 rounded-full bg-blue-500"
              />
            </div>

            <span className="text-xs uppercase tracking-[0.2em] sm:text-sm">
              Scroll Down
            </span>
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md pb-16 lg:justify-self-end"
        >
          {/* Glow */}
          <div className="absolute inset-8 rounded-full bg-blue-500/25 blur-3xl" />

          {/* Photo Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl"
          >
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-900">
              <img
                src="/profile/yashfin.png"
                alt="Yashfin Shaikh"
                className="h-[420px] w-full object-cover object-top sm:h-[500px]"
              />
            </div>

            {/* Floating QA Card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-12 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">
                    QA Profile
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Manual Testing • SDLC • STLC
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                  Available
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                  <p className="text-xs text-slate-400">
                    CGPI
                  </p>

                  <p className="mt-1 text-lg font-bold text-blue-400">
                    9.25
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                  <p className="text-xs text-slate-400">
                    Projects
                  </p>

                  <p className="mt-1 text-lg font-bold text-cyan-400">
                    3
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;