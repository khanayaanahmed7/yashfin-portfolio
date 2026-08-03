const About = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      {/* Heading */}
      <div className="mb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          About Me
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          Passionate About Quality. Driven By Technology.
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Computer Science graduate with hands-on experience in Manual
          Testing, React.js and AI-based academic projects. Passionate
          about building reliable software and continuously improving
          user experience through quality assurance.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* LEFT CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <span className="inline-flex rounded-full bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            👨‍💻 Aspiring QA Engineer
          </span>

          <h3 className="mt-6 text-5xl font-bold text-white">
            Yashfin Shaikh
          </h3>

          <p className="mt-6 text-lg leading-9 text-slate-400">
            Computer Science student with a strong interest in Quality
            Assurance, Manual Testing and building reliable software
            through modern technologies.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center justify-between rounded-2xl bg-slate-800/60 px-6 py-5">
              <span className="text-slate-300">
                📍 Location
              </span>

              <span className="font-semibold text-white">
                Thane, Maharashtra
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-slate-800/60 px-6 py-5">
              <span className="text-slate-300">
                🎓 Education
              </span>

              <span className="font-semibold text-white">
                B.Sc Computer Science
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-slate-800/60 px-6 py-5">
              <span className="text-slate-300">
                📅 Graduation
              </span>

              <span className="font-semibold text-white">
                2026
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-slate-800/60 px-6 py-5">
              <span className="text-slate-300">
                💼 Status
              </span>

              <span className="font-semibold text-green-400">
                Available for Internship
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h3 className="mb-10 text-3xl font-bold text-white">
            Education
          </h3>

          <div className="relative border-l-2 border-blue-500/30 pl-8">

            {/* B.Sc */}
            <div className="relative mb-12">
              <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-slate-900 bg-blue-500"></div>

              <p className="text-sm uppercase tracking-widest text-blue-400">
                Jul 2023 - Apr 2026
              </p>

              <h4 className="mt-2 text-2xl font-bold text-white">
                Bachelor of Science in Computer Science
              </h4>

              <p className="mt-2 text-slate-300">
                MSG-SGKM College of Arts, Science and Commerce
              </p>

              <p className="text-slate-500">
                University of Mumbai
              </p>

              <span className="mt-4 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-blue-400">
                CGPI : 9.25
              </span>
            </div>

            {/* HSC */}
            <div className="relative mb-12">
              <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-slate-900 bg-blue-500"></div>

              <p className="text-sm uppercase tracking-widest text-blue-400">
                Jun 2022 - Mar 2023
              </p>

              <h4 className="mt-2 text-2xl font-bold text-white">
                Higher Secondary Certificate (HSC)
              </h4>

              <p className="mt-2 text-slate-300">
                B S Jhondhale College
              </p>

              <p className="text-slate-500">
                Maharashtra State Board
              </p>

              <span className="mt-4 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-blue-400">
                Percentage : 57%
              </span>
            </div>

            {/* SSC */}
            <div className="relative">
              <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-slate-900 bg-blue-500"></div>

              <p className="text-sm uppercase tracking-widest text-blue-400">
                Jun 2020 - Mar 2021
              </p>

              <h4 className="mt-2 text-2xl font-bold text-white">
                Secondary School Certificate (SSC)
              </h4>

              <p className="mt-2 text-slate-300">
                Asadullah Khan English High School
              </p>

              <p className="text-slate-500">
                Maharashtra State Board
              </p>

              <span className="mt-4 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-blue-400">
                Percentage : 87%
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;