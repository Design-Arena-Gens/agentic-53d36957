import Link from "next/link";

const highlights = [
  { label: "AI Native Curriculum", value: "32+", suffix: "Modular Paths" },
  { label: "Industry Mentors", value: "120+", suffix: "Active Mentors" },
  { label: "Innovation Labs", value: "09", suffix: "National Hubs" },
  { label: "Learner Impact", value: "58K", suffix: "Careers Elevated" },
];

const programTracks = [
  {
    title: "School Innovators",
    audience: "Classes 8-12",
    description:
      "Project-based foundational path covering computational thinking, creative coding, and responsible AI fluency.",
    outcomes: [
      "Design Thinking Sprints",
      "National Maker Challenges",
      "Future Skills Portfolio",
    ],
  },
  {
    title: "University Catalysts",
    audience: "UG & PG Programs",
    description:
      "Interdisciplinary majors with micro-credentials in AI strategy, data storytelling, robotics, and sustainability tech.",
    outcomes: [
      "Dual Mentorship Network",
      "Global Capstone Residencies",
      "Career Co-ops with DeepTech",
    ],
  },
  {
    title: "Workforce Transformers",
    audience: "Professionals",
    description:
      "Sprint-format upskilling combining live studios, autonomous labs, and portfolio-grade industry challenges.",
    outcomes: [
      "Personalised AI Copilots",
      "Placement-Ready Casebooks",
      "Executive Immersion Tracks",
    ],
  },
];

const learningModel = [
  {
    title: "Adaptive Intelligence Graph",
    copy: "Dynamic learner twin that aligns student goals with curated pathways, suggesting mentors, labs, and real-world briefs.",
  },
  {
    title: "Live City-Lab Network",
    copy: "Distributed campuses in Bengaluru, Pune, Shillong, and Kochi with robotics garages, VR caves, and bio-digital labs.",
  },
  {
    title: "National Mission Alliances",
    copy: "Co-created curricula with DRDO, ISRO, MeitY, and leading unicorns to ensure global relevance and Indian context.",
  },
  {
    title: "Ethics & Impact Studio",
    copy: "Studio-led reflections on AI governance, inclusive design, and climate resilience embedded in every learning sprint.",
  },
];

const journey = [
  {
    phase: "Ignite",
    focus: "Discovery & Diagnostic",
    detail:
      "AI readiness diagnostic, learning style mapping, and skill gap analysis to shape a personalised future skills blueprint.",
  },
  {
    phase: "Build",
    focus: "Studios & Labs",
    detail:
      "Weekly studio challenges, hands-on lab cycles, and peer pods guided by industry mentors with live analytics feedback.",
  },
  {
    phase: "Launch",
    focus: "Real World Outcomes",
    detail:
      "Paid co-ops, patent-backed innovations, startup accelerators, and placement pipelines with mission-aligned organisations.",
  },
];

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Student, Future Creator Track",
    quote:
      "IIFS turned AI from theory into a living lab. The mentor pods and impact incubator helped me launch India&apos;s first agritech AI for small farms.",
  },
  {
    name: "Rahul Verma",
    role: "VP AI Strategy, Aether Robotics",
    quote:
      "Hiring from IIFS means day-one readiness. Their learners arrive with a portfolio, co-creation mindset, and strong ethics backbone.",
  },
  {
    name: "Dr. Meera Krishnan",
    role: "Principal, Government PU College",
    quote:
      "We co-teach with IIFS pathways to empower rural learners. Adaptive content and bilingual mentors ensure no student is left behind.",
  },
];

const partners = [
  "National Skill Development Corporation",
  "AIM NITI Aayog",
  "IIT Madras Research Park",
  "Infosys Springboard",
  "Google for Education",
  "United Nations SDSN",
];

const insights = [
  {
    tag: "Blueprint",
    title: "India 2040 Future Skills Radar",
    summary:
      "Key strategic sectors, talent gaps, and the AI-first competencies required to fuel the $1T digital opportunity.",
  },
  {
    tag: "Impact Report",
    title: "Reskilling 1 Million Indians with AI Copilots",
    summary:
      "How intelligent mentorship and adaptive micro-paths accelerated job mobility across 37 Indian cities.",
  },
  {
    tag: "Playbook",
    title: "Designing Responsible AI Classrooms",
    summary:
      "A practical guide for schools to embed ethics, safety, and inclusive storytelling within AI education journeys.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-transparent text-slate-900">
      <main className="relative mx-auto flex max-w-[1200px] flex-col gap-24 px-6 pb-24 pt-16 md:px-10 lg:px-14">
        <div className="pointer-events-none absolute inset-x-0 -top-40 z-0 mx-auto h-[540px] max-w-[900px] rounded-[120px] bg-gradient-to-br from-blue-100 via-white to-white blur-3xl" />
        <header className="relative z-10 flex flex-col gap-12">
          <nav className="flex items-center justify-between rounded-full border border-slate-200/80 bg-white/90 px-6 py-4 shadow-lg shadow-slate-200/40 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 text-white font-semibold">
                I
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                  Indian Institute of Future Skills
                </p>
                <h1 className="text-xl font-semibold text-slate-900">
                  IIFS · Reimagining Indian Education
                </h1>
              </div>
            </div>
            <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              <Link href="#programs" className="hover:text-slate-900">
                Programs
              </Link>
              <Link href="#model" className="hover:text-slate-900">
                Learning Model
              </Link>
              <Link href="#impact" className="hover:text-slate-900">
                Impact
              </Link>
              <Link href="#insights" className="hover:text-slate-900">
                Insights
              </Link>
            </div>
            <Link
              href="#connect"
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-400/30 transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
            >
              Join the Mission
            </Link>
          </nav>

          <section className="relative isolate flex flex-col gap-10 rounded-[36px] bg-white px-10 pb-14 pt-16 shadow-xl shadow-slate-200/70">
            <div className="pointer-events-none absolute inset-x-8 inset-y-6 rounded-[30px] bg-gradient-to-tr from-blue-50 via-white to-pink-50 ring-1 ring-inset ring-white/40" />
            <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center">
              <div className="flex-1 space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600 ring-1 ring-blue-100">
                  National AI-first Education Mission
                </span>
                <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  India’s future-ready talent built in human-centered AI labs.
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                  IIFS empowers learners across India with adaptive AI
                  companions, city labs, and industry co-created pathways.
                  Together we activate India’s innovation capital with equity,
                  purpose, and exponential technologies.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="#programs"
                    className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-300/40 transition hover:shadow-xl hover:shadow-blue-400/40"
                  >
                    Explore Learning Journeys
                  </Link>
                  <Link
                    href="#impact"
                    className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                  >
                    View Impact Report
                  </Link>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-inner">
                <div className="space-y-3">
                  <p className="text-sm font-medium uppercase text-slate-500">
                    Vision 2030 Goals
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {highlights.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-slate-100 bg-white/80 p-4 shadow-sm"
                      >
                        <p className="text-3xl font-semibold text-slate-900">
                          {item.value}
                          <span className="text-base font-medium text-blue-500">
                            {item.suffix ? ` ${item.suffix}` : ""}
                          </span>
                        </p>
                        <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-4 text-sm text-blue-700">
                  Recognised by the Ministry of Education’s National Digital
                  University initiative and aligned with NEP 2020 & Skill India
                  Mission.
                </div>
              </div>
            </div>
          </section>
        </header>

        <section
          id="programs"
          className="relative z-10 rounded-[36px] border border-slate-100 bg-white px-10 py-14 shadow-lg shadow-slate-200/60"
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Mission-aligned Journeys
              </h3>
              <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Personalised learning arcs for every Indian learner.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                Each journey blends multi-modal learning, real-world impact, and
                culturally rooted storytelling so learners can build, test, and
                lead with confidence.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {programTracks.map((track) => (
                <article
                  key={track.title}
                  className="flex h-full flex-col gap-5 rounded-[28px] border border-slate-100 bg-gradient-to-br from-white to-slate-50/50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                      {track.audience}
                    </p>
                    <h4 className="mt-3 text-2xl font-semibold text-slate-900">
                      {track.title}
                    </h4>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-slate-600">
                    {track.description}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {track.outcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 ring-1 ring-slate-200/80"
                      >
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="model"
          className="relative z-10 rounded-[36px] border border-transparent bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 px-10 py-14 text-white shadow-xl shadow-slate-300/70"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[36px]">
            <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 flex flex-col gap-12">
            <header className="max-w-2xl space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                Learning Architecture
              </h3>
              <p className="text-3xl font-semibold leading-tight sm:text-4xl">
                AI-native pedagogy rooted in India&apos;s diversity.
              </p>
              <p className="text-base text-slate-200">
                Our learning fabric connects adaptive intelligence, physical
                labs, and industry missions to craft deeply human, future-ready
                outcomes.
              </p>
            </header>
            <div className="grid gap-6 md:grid-cols-2">
              {learningModel.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
                >
                  <h4 className="text-xl font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200 group-hover:text-white">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm text-slate-200 ring-1 ring-white/5">
              NEP 2020 aligned | AICTE recognised micro-credentials | Powered by
              IIFS Neuro-Lab OS and Bharat Open Learning Cloud.
            </div>
          </div>
        </section>

        <section
          id="impact"
          className="relative z-10 rounded-[36px] border border-slate-100 bg-white px-10 py-14 shadow-lg shadow-slate-200/60"
        >
          <div className="flex flex-col gap-12">
            <header className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Impact Flywheel
              </h3>
              <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                From exploration to exponential impact.
              </p>
            </header>
            <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr]">
              <div className="grid gap-6">
                {journey.map((stage, index) => (
                  <div
                    key={stage.phase}
                    className="relative flex flex-col gap-3 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <span className="absolute left-6 top-0 -translate-y-1/2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase text-slate-500">
                      Step {index + 1}
                    </span>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h4 className="text-2xl font-semibold text-slate-900">
                        {stage.phase}
                      </h4>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                        {stage.focus}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {stage.detail}
                    </p>
                  </div>
                ))}
              </div>
              <aside className="flex flex-col gap-5 rounded-[28px] border border-blue-100 bg-blue-50/60 p-6 shadow-inner">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                  Outcomes
                </p>
                <ul className="space-y-3 text-sm text-blue-800">
                  <li className="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-blue-100">
                    87% learners transition into future skills roles within six
                    months.
                  </li>
                  <li className="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-blue-100">
                    400+ patents, social innovations, and climate-tech ventures
                    incubated.
                  </li>
                  <li className="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-blue-100">
                    65% participation from women, rural, and first-generation
                    learners across India.
                  </li>
                  <li className="rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-blue-100">
                    National AI Educator Network training 15,000 teachers.
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section
          id="voices"
          className="relative z-10 rounded-[36px] border border-slate-100 bg-white px-10 py-14 shadow-lg shadow-slate-200/60"
        >
          <div className="flex flex-col gap-10">
            <header className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Voices from the Future
              </h3>
              <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                The IIFS collective shaping India&apos;s tomorrow.
              </p>
            </header>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote
                  key={item.name}
                  className="flex h-full flex-col gap-4 rounded-[28px] border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm"
                >
                  <p className="text-sm leading-relaxed text-slate-600">
                    “{item.quote}”
                  </p>
                  <div className="mt-auto">
                    <p className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </p>
                    <p className="text-xs uppercase tracking-wide text-slate-500">
                      {item.role}
                    </p>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section
          id="partners"
          className="relative z-10 rounded-[36px] border border-transparent bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 px-10 py-12 text-white shadow-xl shadow-slate-300/70"
        >
          <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                Strategic Collaborations
              </h3>
              <p className="text-3xl font-semibold leading-tight sm:text-4xl">
                Powered by a nationwide coalition of change-makers.
              </p>
            </header>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-100 backdrop-blur"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="insights"
          className="relative z-10 rounded-[36px] border border-slate-100 bg-white px-10 py-14 shadow-lg shadow-slate-200/60"
        >
          <div className="flex flex-col gap-10">
            <header className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Insight Library
              </h3>
              <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Research, playbooks, and policy to accelerate transformation.
              </p>
            </header>
            <div className="grid gap-6 md:grid-cols-3">
              {insights.map((insight) => (
                <article
                  key={insight.title}
                  className="flex h-full flex-col gap-4 rounded-[28px] border border-slate-100 bg-gradient-to-br from-white to-slate-50/60 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="inline-flex w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {insight.tag}
                  </span>
                  <h4 className="text-lg font-semibold text-slate-900">
                    {insight.title}
                  </h4>
                  <p className="flex-1 text-sm leading-relaxed text-slate-600">
                    {insight.summary}
                  </p>
                  <Link
                    href="#"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Download report →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          className="relative z-10 rounded-[36px] border border-transparent bg-gradient-to-br from-amber-100 via-white to-teal-100 px-10 py-14 shadow-xl shadow-amber-200/80"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                Join the Movement
              </h3>
              <p className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Partner with IIFS to build India&apos;s future skill capital.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Universities, schools, corporates, state governments, and
                philanthropies co-create with us to democratise access to future
                skills. Let&apos;s build the next decade of Indian learning.
              </p>
            </div>
            <form className="flex flex-1 flex-col gap-4 rounded-[28px] border border-white/60 bg-white/90 p-6 shadow-lg backdrop-blur">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Organisation / Institution
                </label>
                <input
                  type="text"
                  placeholder="School, College, Company, Foundation"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Interest Area
                  </label>
                  <select className="mt-2 w-full appearance-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100">
                    <option>School Partnerships</option>
                    <option>University Alliances</option>
                    <option>Corporate Upskilling</option>
                    <option>State Policy Collaboration</option>
                    <option>Philanthropy & CSR</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your vision for future-ready India."
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-400/40 transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
              >
                Submit Interest
              </button>
            </form>
          </div>
        </section>

        <footer className="relative z-10 flex flex-col gap-4 pb-10 text-sm text-slate-500">
          <p className="font-semibold uppercase tracking-[0.35em] text-slate-400">
            IIFS · Indian Institute of Future Skills
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} IIFS. All rights reserved. Crafted in
              Bengaluru · Pune · Shillong.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-slate-700">
                Admissions
              </Link>
              <Link href="#" className="hover:text-slate-700">
                Educator Network
              </Link>
              <Link href="#" className="hover:text-slate-700">
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
