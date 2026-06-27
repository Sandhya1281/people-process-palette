import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Users, Target, TrendingUp, Brain, Heart, Lightbulb, Award, Briefcase,
  GraduationCap, MessageSquare, ChevronDown, Check, Video, Calendar,
  BadgeCheck, LifeBuoy, Linkedin, Twitter, Instagram, Facebook, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PeopleProcess: Business Psychology in Action" },
      { name: "description", content: "A premium 12-week programme in applied business psychology. People. Performance. Possibilities." },
      { property: "og:title", content: "PeopleProcess: Business Psychology in Action" },
      { property: "og:description", content: "People. Performance. Possibilities. — applied business psychology for leaders, HR and entrepreneurs." },
    ],
  }),
  component: Landing,
});

const navLinks = [
  { href: "#who", label: "Who It's For" },
  { href: "#achieve", label: "Outcomes" },
  { href: "#curriculum", label: "Curriculum" },
  { href: "#trainers", label: "Trainers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

const audience = [
  "HR professionals ready to lead culture-defining work",
  "Team leaders and managers building high-performing teams",
  "Entrepreneurs scaling people-first organisations",
  "L&D specialists designing behavioural change programmes",
  "Coaches and consultants who advise on people strategy",
  "Career-changers moving into people, talent or culture roles",
];

const outcomes = [
  { icon: Brain, title: "Read behaviour with precision", text: "Decode motivation, conflict and decision-making using evidence-based psychology." },
  { icon: TrendingUp, title: "Lift team performance", text: "Apply proven frameworks that turn engagement into measurable output." },
  { icon: Heart, title: "Design human-first cultures", text: "Build trust, psychological safety and a culture people choose to stay in." },
  { icon: Target, title: "Make sharper people decisions", text: "Hire, promote and develop talent with data, not gut feeling alone." },
  { icon: MessageSquare, title: "Communicate to influence", text: "Run conversations, feedback and change with clarity and conviction." },
  { icon: Award, title: "Earn a recognised credential", text: "Graduate with a portfolio and certificate you can put to work immediately." },
];

const achievements = [
  { icon: Brain, title: "Apply behavioural science", text: "Translate research from organisational psychology into daily leadership moves." },
  { icon: Users, title: "Coach individuals & teams", text: "Run development conversations that unlock motivation and ownership." },
  { icon: TrendingUp, title: "Diagnose performance gaps", text: "Use structured models to find the real cause behind underperformance." },
  { icon: Lightbulb, title: "Lead change confidently", text: "Plan and deliver change that sticks, with people genuinely on board." },
  { icon: Heart, title: "Build psychological safety", text: "Create environments where candour, learning and risk-taking thrive." },
  { icon: Briefcase, title: "Influence the C-suite", text: "Make the business case for people initiatives in the language leaders trust." },
];

const modules = [
  "Introduction to Business Psychology",
  "The Science of Motivation & Performance",
  "Organisational Behaviour in Practice",
  "Personality, Strengths & Team Dynamics",
  "Leadership Psychology & Influence",
  "Communication, Feedback & Difficult Conversations",
  "Decision-Making, Bias & Judgement",
  "Culture, Engagement & Belonging",
  "Change Management & Resilience",
  "Applied Capstone: A People Strategy in Action",
];

const trainers = [
  { initials: "AM", name: "Dr. Amara Mensah", title: "Organisational Psychologist", bio: "Fifteen years advising scale-ups and FTSE 100 teams on leadership and culture. Former Head of People Science at a global consultancy." },
  { initials: "JR", name: "Julian Reyes", title: "Executive Coach & Facilitator", bio: "Coaches founders and senior leaders across Europe and LATAM. Specialises in performance psychology and high-stakes communication." },
  { initials: "SO", name: "Soraya Okafor", title: "People & Culture Strategist", bio: "Has built people functions from 20 to 2,000 employees. Writes and teaches on belonging, engagement and modern HR." },
];

const expectations = [
  { icon: Video, title: "Live Sessions", text: "Weekly interactive workshops with cohort discussion." },
  { icon: Calendar, title: "12 Weeks", text: "Structured pace, ~5 hours per week of learning." },
  { icon: BadgeCheck, title: "Certificate", text: "Recognised certificate of completion on graduation." },
  { icon: LifeBuoy, title: "1-on-1 Mentorship", text: "Monthly mentor calls with a senior practitioner." },
];

const tiers = [
  {
    name: "Standard", price: "£890", tagline: "The full programme, on your own pace.",
    features: ["All 10 core modules", "Live cohort sessions", "Course workbook & toolkits", "Certificate of completion"],
    featured: false,
  },
  {
    name: "Professional", price: "£1,490", tagline: "Most chosen by working professionals.", badge: "Most Popular",
    features: ["Everything in Standard", "Monthly 1:1 mentorship", "Peer practice groups", "Capstone project review", "Lifetime alumni access"],
    featured: true,
  },
  {
    name: "Premium", price: "£2,390", tagline: "For leaders rolling this out at work.",
    features: ["Everything in Professional", "Six private coaching sessions", "Team diagnostic toolkit", "Bespoke case study", "Priority hiring network"],
    featured: false,
  },
];

const faqs = [
  { q: "Do I need a psychology background?", a: "No. The programme is designed for practitioners, not academics. We translate the science into tools you can use from week one." },
  { q: "How much time should I budget each week?", a: "Plan for around five hours: one live session plus self-paced reading, reflection and a short applied exercise." },
  { q: "Can I pay in instalments?", a: "Yes. All tiers can be split into three or six monthly payments at no extra cost. Employer invoicing is also supported." },
  { q: "Will I receive a certificate?", a: "Yes. On completing the modules and capstone you receive a verifiable certificate you can share on LinkedIn." },
  { q: "Is the programme fully online?", a: "Yes. Live sessions, mentorship and community happen online so you can join from anywhere in the world." },
  { q: "What if I miss a live session?", a: "Every session is recorded and posted within 24 hours, along with notes and exercises so you stay on track." },
  { q: "Who teaches the programme?", a: "A faculty of practising organisational psychologists, executive coaches and senior people leaders — not career academics." },
  { q: "Is there a refund policy?", a: "Yes. If the programme is not for you, request a full refund within the first 14 days, no questions asked." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <Hero />
      <Who />
      <Achieve />
      <Curriculum />
      <RegistrationForm />
      <Trainers />
      <Expect />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">P</span>
          <span className="hidden sm:inline">PeopleProcess</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-ink-soft">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#register" className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-5 py-2 text-sm font-semibold hover:bg-brand-dark transition-colors">
          Register <ArrowRight className="h-4 w-4" />
        </a>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 px-6 py-4 space-y-3 text-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-ink-soft hover:text-brand">{l.label}</a>
          ))}
          <a href="#register" onClick={() => setOpen(false)} className="block rounded-full bg-brand text-brand-foreground text-center px-5 py-2 font-semibold">Register Now</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-white/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 text-brand-foreground">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
          <GraduationCap className="h-3.5 w-3.5" /> 12-week applied programme
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight max-w-4xl">
          PeopleProcess:<br />
          <span className="text-white/95">Business Psychology in Action</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-light text-white/90 max-w-2xl">
          People. Performance. Possibilities.
        </p>
        <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl">
          A practical programme that turns the science of human behaviour into the everyday craft of leading teams, building cultures and growing businesses.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#register" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-dark px-7 py-3.5 text-base font-semibold shadow-lg hover:translate-y-[-1px] transition-transform">
            Register Now <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#curriculum" className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors">
            View Curriculum
          </a>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl text-white/90">
          <Stat n="10" l="Core modules" />
          <Stat n="12" l="Weeks live" />
          <Stat n="1:1" l="Mentorship" />
        </div>
      </div>
    </section>
  );
}
function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold">{n}</div>
      <div className="text-xs md:text-sm uppercase tracking-wider text-white/70">{l}</div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle, align = "left" }: { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</div>}
      <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-ink-soft">{subtitle}</p>}
    </div>
  );
}

function Who() {
  return (
    <section id="who" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <SectionTitle eyebrow="Who Can Apply?" title="Who is this programme for?" subtitle="If your work depends on understanding people — how they decide, perform and grow — this programme is built for you." />
          <ul className="mt-8 space-y-4">
            {audience.map((a) => (
              <li key={a} className="flex gap-3">
                <Check className="h-5 w-5 text-brand mt-0.5 flex-none" />
                <span className="text-ink-soft">{a}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-brand-soft p-8 md:p-10 border border-brand/10">
          <SectionTitle eyebrow="Programme Outcomes" title="What you'll walk away with" />
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {outcomes.map((o) => (
              <div key={o.title} className="rounded-2xl bg-background p-5 shadow-[var(--shadow-soft)]">
                <o.icon className="h-6 w-6 text-brand" />
                <h3 className="mt-3 font-semibold">{o.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Achieve() {
  return (
    <section id="achieve" className="py-24 md:py-32 bg-surface-alt border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Achievements" title="WHAT WILL YOU BE ABLE TO ACHIEVE?" subtitle="Concrete capabilities you can put to work the week after the programme ends." align="center" />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div key={a.title} className="group relative rounded-2xl bg-background p-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all border border-border/40">
              <div className="absolute top-0 left-7 right-7 h-1 rounded-b-full bg-brand" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Curriculum() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="curriculum" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle eyebrow="Curriculum" title="WHAT WILL YOU STUDY?" subtitle="Ten modules, one continuous arc — from the fundamentals of human behaviour to leading change in real organisations." align="center" />
        <div className="mt-14 rounded-3xl border border-border/60 overflow-hidden shadow-[var(--shadow-soft)]">
          <button onClick={() => setOpenIdx(openIdx === 0 ? null : 0)} className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-6 bg-brand text-brand-foreground text-left">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/70">Course 1</div>
              <div className="mt-1 text-xl md:text-2xl font-bold">Foundations of Business Psychology</div>
            </div>
            <ChevronDown className={`h-6 w-6 transition-transform ${openIdx === 0 ? "rotate-180" : ""}`} />
          </button>
          {openIdx === 0 && (
            <ol className="bg-background divide-y divide-border/60">
              {modules.map((m, i) => (
                <li key={m} className="flex items-center gap-5 px-6 md:px-8 py-5 hover:bg-brand-soft/40 transition-colors">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-soft text-brand font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-medium">{m}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
}

function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };
  return (
    <section id="register" className="py-24 md:py-32 bg-surface-alt border-y border-border/60">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle eyebrow="Registration" title="Reserve your place" subtitle="Tell us a little about you and we'll be in touch within two working days." align="center" />
        <div className="mt-12 rounded-3xl bg-background p-8 md:p-10 shadow-[var(--shadow-card)] border border-border/40">
          {submitted ? (
            <div className="text-center py-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-2xl font-bold">Thanks — you're on the list.</h3>
              <p className="mt-2 text-ink-soft">We'll reach out within two working days with next steps.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone Number" name="phone" type="tel" />
              <Field label="Organisation" name="org" />
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1.5">How did you hear about us?</label>
                <div className="relative">
                  <select required defaultValue="" className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand">
                    <option value="" disabled>Select an option</option>
                    <option>LinkedIn</option>
                    <option>Google search</option>
                    <option>A friend or colleague</option>
                    <option>A trainer or alum</option>
                    <option>Podcast or article</option>
                    <option>Other</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft pointer-events-none" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full sm:w-auto rounded-full bg-brand text-brand-foreground px-8 py-3.5 font-semibold hover:bg-brand-dark transition-colors">
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">{label}{required && <span className="text-brand"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" />
    </div>
  );
}

function Trainers() {
  return (
    <section id="trainers" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Faculty" title="Learn from practitioners" subtitle="A faculty of working psychologists, coaches and people leaders — not career academics." align="center" />
        <div className="mt-16 grid md:grid-cols-3 gap-7">
          {trainers.map((t) => (
            <div key={t.name} className="rounded-3xl border border-border/40 bg-background p-8 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
              <div className="mx-auto h-24 w-24 rounded-full flex items-center justify-center text-2xl font-bold text-brand-foreground" style={{ background: "var(--gradient-hero)" }}>
                {t.initials}
              </div>
              <h3 className="mt-6 text-lg font-bold">{t.name}</h3>
              <div className="text-sm text-brand font-medium">{t.title}</div>
              <p className="mt-4 text-sm text-ink-soft leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expect() {
  return (
    <section className="py-20 bg-brand text-brand-foreground">
      <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {expectations.map((e) => (
          <div key={e.title} className="text-center">
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 border border-white/20">
              <e.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-4 font-bold text-lg">{e.title}</h3>
            <p className="mt-1 text-sm text-white/80">{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-surface-alt border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Pricing" title="Choose your level of support" subtitle="The same core programme — pick how much mentorship and depth you want around it." align="center" />
        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-3xl p-8 flex flex-col border transition-all ${t.featured ? "bg-brand text-brand-foreground border-brand shadow-[var(--shadow-card)] scale-[1.02] md:scale-105" : "bg-background border-border/50 shadow-[var(--shadow-soft)]"}`}>
              {t.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white text-brand text-xs font-bold px-4 py-1 shadow-md uppercase tracking-wider">{t.badge}</span>
              )}
              <div className={`text-xs font-semibold uppercase tracking-widest ${t.featured ? "text-white/80" : "text-brand"}`}>{t.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-extrabold">{t.price}</span>
                <span className={`text-sm ${t.featured ? "text-white/70" : "text-ink-soft"}`}>one-time</span>
              </div>
              <p className={`mt-2 text-sm ${t.featured ? "text-white/80" : "text-ink-soft"}`}>{t.tagline}</p>
              <ul className="mt-7 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className={`h-5 w-5 flex-none ${t.featured ? "text-white" : "text-brand"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#register" className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 font-semibold transition-colors ${t.featured ? "bg-white text-brand hover:bg-white/90" : "bg-brand text-brand-foreground hover:bg-brand-dark"}`}>Choose {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle eyebrow="FAQ" title="Questions, answered" align="center" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-2xl border border-border/60 bg-background overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-brand-soft/30 transition-colors">
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-brand flex-none transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-6 pb-6 text-ink-soft text-sm leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-bold text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">P</span>
            PeopleProcess
          </div>
          <p className="mt-3 text-sm">People. Performance. Possibilities.</p>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-white mb-3">Programme</div>
          <ul className="space-y-2">
            <li><a href="#curriculum" className="hover:text-brand">Curriculum</a></li>
            <li><a href="#pricing" className="hover:text-brand">Pricing</a></li>
            <li><a href="#faq" className="hover:text-brand">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white mb-3 text-sm">Follow along</div>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-brand hover:border-brand transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/50 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} PeopleProcess. All rights reserved.</span>
          <span>Business Psychology in Action</span>
        </div>
      </div>
    </footer>
  );
}