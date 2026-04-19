import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { education, experiences, featuredProject, highlights, profile, skills } from './content';

const sectionTitleClass =
  'text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--portfolio-accent)]';

export const PortfolioPage = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}Nguyen-Duc-Nam-FRONEND_DEV.pdf`;

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[var(--portfolio-surface)] text-[var(--portfolio-ink)] shadow-[0_32px_120px_rgba(18,38,40,0.14)] ring-1 ring-black/5">
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(246,151,95,0.24),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(56,122,118,0.22),_transparent_28%),linear-gradient(180deg,_rgba(250,244,235,0.96),_rgba(244,236,225,0.92))]" />
      <div className="absolute inset-y-0 right-0 hidden w-[28rem] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.62),_transparent_55%)] lg:block" />

      <section
        id="top"
        className="relative grid min-h-[calc(100svh-9rem)] gap-12 px-6 pt-14 pb-16 sm:px-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:px-14 lg:pt-20"
      >
        <div className="flex max-w-3xl flex-col justify-between gap-10">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Badge className="border-0 bg-[var(--portfolio-ink)] px-3 py-1 text-[11px] tracking-[0.22em] text-[var(--portfolio-surface)] uppercase">
                Portfolio 2026
              </Badge>
              <span className="inline-flex items-center gap-2 text-[var(--portfolio-muted)]">
                <Sparkles className="h-4 w-4 text-[var(--portfolio-accent)]" />
                Building frontend systems that scale under pressure
              </span>
            </div>

            <div className="space-y-5">
              <p className={sectionTitleClass}>Nguyen Duc Nam</p>
              <h1 className="max-w-4xl text-5xl leading-none font-semibold tracking-[-0.06em] text-balance sm:text-6xl lg:text-7xl">
                Frontend leadership with a product delivery mindset.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--portfolio-muted)] sm:text-xl">
                {profile.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#experience">
                <Button className="h-11 rounded-full bg-[var(--portfolio-ink)] px-6 text-[var(--portfolio-surface)] hover:bg-[var(--portfolio-ink)]/92">
                  Explore experience
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="h-11 rounded-full border-[var(--portfolio-line)] bg-white/70 px-6 backdrop-blur-sm"
                >
                  Download CV
                  <Download className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="grid gap-4 text-sm text-[var(--portfolio-muted)] sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-[var(--portfolio-accent)]" />
              <div>
                <p className="text-[var(--portfolio-ink)]">Email</p>
                <a
                  className="transition-colors hover:text-[var(--portfolio-ink)]"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-[var(--portfolio-accent)]" />
              <div>
                <p className="text-[var(--portfolio-ink)]">Phone</p>
                <a
                  className="transition-colors hover:text-[var(--portfolio-ink)]"
                  href={`tel:${profile.phone}`}
                >
                  {profile.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-[var(--portfolio-accent)]" />
              <div>
                <p className="text-[var(--portfolio-ink)]">Location</p>
                <p>{profile.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <BriefcaseBusiness className="mt-0.5 h-4 w-4 text-[var(--portfolio-accent)]" />
              <div>
                <p className="text-[var(--portfolio-ink)]">Focus</p>
                <p>{profile.intro}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-end">
          <div className="w-full rounded-[2rem] border border-white/60 bg-white/72 p-5 shadow-[0_24px_80px_rgba(33,51,53,0.14)] backdrop-blur-md">
            <div className="mb-10 space-y-4">
              <div className="flex items-center justify-between">
                <p className={sectionTitleClass}>Signal</p>
                <span className="rounded-full bg-[var(--portfolio-soft)] px-3 py-1 text-xs text-[var(--portfolio-ink)]">
                  Lead profile
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-[var(--portfolio-line)] bg-[rgba(255,255,255,0.78)] p-4"
                  >
                    <p className="text-xs tracking-[0.18em] text-[var(--portfolio-muted)] uppercase">
                      {item.label}
                    </p>
                    <p className="mt-3 text-lg leading-snug font-semibold">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--portfolio-muted)]">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-[var(--portfolio-ink)] p-6 text-[var(--portfolio-surface)]">
              <p className="text-xs tracking-[0.18em] text-white/56 uppercase">Core stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {profile.specialties.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/12 bg-white/8 px-3 py-1.5 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm leading-7 text-white/72">
                I care about frontend systems that stay clean under growth: predictable
                architecture, resilient UI foundations, and teams that can ship without losing
                quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-[var(--portfolio-line)] bg-white/60 px-6 py-8 sm:px-10 lg:px-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-4xl font-semibold tracking-[-0.06em]">{profile.yearsOfExperience}</p>
            <p className="mt-2 text-sm text-[var(--portfolio-muted)]">
              Years shipping production frontend
            </p>
          </div>
          <div>
            <p className="text-4xl font-semibold tracking-[-0.06em]">15</p>
            <p className="mt-2 text-sm text-[var(--portfolio-muted)]">
              Largest team size led on current project
            </p>
          </div>
          <div>
            <p className="text-4xl font-semibold tracking-[-0.06em]">4</p>
            <p className="mt-2 text-sm text-[var(--portfolio-muted)]">
              Product sectors with hands-on delivery
            </p>
          </div>
          <div>
            <p className="text-4xl font-semibold tracking-[-0.06em]">3</p>
            <p className="mt-2 text-sm text-[var(--portfolio-muted)]">
              International markets served
            </p>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative grid gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.6fr_1.4fr] lg:px-14 lg:py-20"
      >
        <div className="space-y-4">
          <p className={sectionTitleClass}>Experience</p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
            Built across delivery, architecture, and team execution.
          </h2>
          <p className="max-w-md text-base leading-7 text-[var(--portfolio-muted)]">
            My work sits between implementation depth and product movement: building interfaces,
            shaping frontend direction, and keeping teams aligned on quality.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="grid gap-5 rounded-[1.75rem] border border-[var(--portfolio-line)] bg-white/70 p-6 shadow-[0_14px_50px_rgba(22,44,46,0.08)] lg:grid-cols-[10rem_1fr]"
            >
              <div>
                <p className="text-xs tracking-[0.18em] text-[var(--portfolio-muted)] uppercase">
                  {experience.period}
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold tracking-[-0.04em]">{experience.company}</p>
                <p className="mt-1 text-sm tracking-[0.18em] text-[var(--portfolio-accent)] uppercase">
                  {experience.title}
                </p>
                <div className="mt-5 grid gap-3 text-sm leading-7 text-[var(--portfolio-muted)]">
                  {experience.points.map((point) => (
                    <p key={point} className="border-l border-[var(--portfolio-line)] pl-4">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="project"
        className="relative bg-[linear-gradient(135deg,rgba(20,46,48,1),rgba(38,76,73,0.96))] px-6 py-16 text-[var(--portfolio-surface)] sm:px-10 lg:px-14 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.28em] text-[rgba(249,196,156,0.9)] uppercase">
              Featured project
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              {featuredProject.name}
            </h2>
            <p className="max-w-lg text-base leading-7 text-white/70">{featuredProject.summary}</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
            <p className="text-sm tracking-[0.18em] text-white/48 uppercase">
              {featuredProject.period}
            </p>
            <p className="mt-3 text-lg font-medium text-white/90">{featuredProject.scope}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/8 px-3 py-1.5 text-sm text-white/84"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] bg-black/12 p-5">
              <p className="text-xs tracking-[0.18em] text-white/48 uppercase">Key achievement</p>
              <p className="mt-3 text-base leading-7 text-white/82">
                {featuredProject.achievement}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="relative grid gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-14 lg:py-20"
      >
        <div className="space-y-4">
          <p className={sectionTitleClass}>Skills</p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
            Practical stack for teams that need speed and structure.
          </h2>
          <p className="max-w-md text-base leading-7 text-[var(--portfolio-muted)]">
            My background spans implementation, system reuse, delivery workflow, and cloud-aware
            product execution.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.75rem] border border-[var(--portfolio-line)] bg-[rgba(255,255,255,0.78)] p-6"
            >
              <p className="text-xs tracking-[0.18em] text-[var(--portfolio-muted)] uppercase">
                {group.title}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--portfolio-soft)] px-3 py-1.5 text-sm text-[var(--portfolio-ink)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative grid gap-10 border-t border-[var(--portfolio-line)] bg-white/68 px-6 py-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-20"
      >
        <div className="space-y-4">
          <p className={sectionTitleClass}>Education</p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
            Strong academic base, grounded in engineering discipline.
          </h2>
          <div className="space-y-2 text-base leading-7 text-[var(--portfolio-muted)]">
            <p className="text-[var(--portfolio-ink)]">{education.school}</p>
            <p>{education.period}</p>
            <p>Major: {education.major}</p>
            <p>GPA: {education.gpa}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[var(--portfolio-line)] bg-[var(--portfolio-soft)] p-6">
          <p className="text-xs tracking-[0.18em] text-[var(--portfolio-muted)] uppercase">
            Contact
          </p>
          <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
            Open to frontend leadership and high-impact product work.
          </p>
          <div className="mt-6 space-y-3 text-sm leading-7 text-[var(--portfolio-muted)]">
            <a
              className="block transition-colors hover:text-[var(--portfolio-ink)]"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
            <a
              className="block transition-colors hover:text-[var(--portfolio-ink)]"
              href={`tel:${profile.phone}`}
            >
              {profile.phone}
            </a>
            <a
              className="block transition-colors hover:text-[var(--portfolio-ink)]"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile
            </a>
            <p>{profile.location}</p>
          </div>
          <a
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--portfolio-ink)] transition-opacity hover:opacity-75"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>
      </section>
    </div>
  );
};
