import { ArrowRight, Download, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { education, experiences, featuredProject, highlights, profile, skills } from './content';

const sectionTitleClass =
  'text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--portfolio-accent)]';

export const PortfolioPage = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}Nguyen-Duc-Nam-FRONEND_DEV.pdf`;

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[var(--portfolio-surface)] text-[var(--portfolio-ink)] shadow-[0_32px_120px_var(--portfolio-shadow)] ring-1 ring-[var(--portfolio-ring)]">
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-[var(--portfolio-hero)]" />
      <div className="absolute inset-y-0 right-0 hidden w-[28rem] bg-[var(--portfolio-side-glow)] lg:block" />
      <div className="pointer-events-none absolute top-10 right-6 hidden text-[10rem] leading-none font-semibold tracking-[-0.08em] text-[var(--portfolio-watermark)] lg:block">
        Nam
      </div>

      <section
        id="top"
        className="relative grid min-h-[calc(100svh-9rem)] gap-14 px-6 pt-14 pb-18 sm:px-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(21rem,0.82fr)] lg:px-14 lg:pt-20"
      >
        <div className="flex max-w-3xl flex-col justify-between gap-12">
          <div className="space-y-10">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--portfolio-line)] bg-[var(--portfolio-card)] px-3 py-1.5 text-[11px] tracking-[0.22em] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--portfolio-accent)]" />
                Portfolio 2026
              </span>
              <span className="inline-flex items-center gap-2 text-[var(--portfolio-muted)]">
                <Sparkles className="h-4 w-4 text-[var(--portfolio-accent)]" />
                Frontend systems with delivery discipline
              </span>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <p className={sectionTitleClass}>Nguyen Duc Nam</p>
                <p className="text-sm tracking-[0.22em] text-[var(--portfolio-muted)] uppercase">
                  {profile.role}
                </p>
              </div>
              <h1 className="max-w-5xl [font-family:var(--font-display)] text-5xl leading-[0.92] font-semibold tracking-[-0.07em] text-balance sm:text-6xl lg:text-8xl">
                Designing calm, scalable frontend experiences for real product teams.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--portfolio-muted)] sm:text-lg lg:text-xl">
                {profile.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#experience">
                <Button className="h-11 rounded-full bg-[var(--portfolio-ink)] px-6 text-[var(--portfolio-surface)] shadow-[0_18px_40px_var(--portfolio-shadow)] hover:bg-[var(--portfolio-ink)]/92">
                  Explore experience
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="h-11 rounded-full border-[var(--portfolio-line)] bg-[var(--portfolio-card)] px-6 text-[var(--portfolio-ink)] backdrop-blur-sm hover:bg-[var(--portfolio-soft)]"
                >
                  Download CV
                  <Download className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="grid gap-4 text-sm text-[var(--portfolio-muted)] sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[1.25rem] border border-[var(--portfolio-line)] bg-[var(--portfolio-card)] p-4">
              <Mail className="mb-3 h-4 w-4 text-[var(--portfolio-accent)]" />
              <p className="text-xs tracking-[0.18em] text-[var(--portfolio-muted)] uppercase">
                Email
              </p>
              <a
                className="mt-2 block text-sm text-[var(--portfolio-ink)] transition-colors hover:text-[var(--portfolio-accent)]"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </div>
            <div className="rounded-[1.25rem] border border-[var(--portfolio-line)] bg-[var(--portfolio-card)] p-4">
              <Phone className="mb-3 h-4 w-4 text-[var(--portfolio-accent)]" />
              <p className="text-xs tracking-[0.18em] text-[var(--portfolio-muted)] uppercase">
                Phone
              </p>
              <a
                className="mt-2 block text-sm text-[var(--portfolio-ink)] transition-colors hover:text-[var(--portfolio-accent)]"
                href={`tel:${profile.phone}`}
              >
                {profile.phone}
              </a>
            </div>
            <div className="rounded-[1.25rem] border border-[var(--portfolio-line)] bg-[var(--portfolio-card)] p-4">
              <MapPin className="mb-3 h-4 w-4 text-[var(--portfolio-accent)]" />
              <p className="text-xs tracking-[0.18em] text-[var(--portfolio-muted)] uppercase">
                Location
              </p>
              <p className="mt-2 text-sm text-[var(--portfolio-ink)]">{profile.location}</p>
            </div>
            <div className="rounded-[1.25rem] border border-[var(--portfolio-line)] bg-[var(--portfolio-card)] p-4">
              <Mail className="mt-0.5 h-4 w-4 text-[var(--portfolio-accent)]" />
              <p className="mt-3 text-xs tracking-[0.18em] text-[var(--portfolio-muted)] uppercase">
                Focus
              </p>
              <p className="mt-2 text-sm leading-6 text-[var(--portfolio-ink)]">{profile.intro}</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-end">
          <div className="w-full rounded-[2.25rem] border border-[var(--portfolio-line)] bg-[var(--portfolio-card)] p-6 shadow-[0_28px_90px_var(--portfolio-shadow)] backdrop-blur-md lg:p-7">
            <div className="flex items-center justify-between border-b border-[var(--portfolio-line)] pb-5">
              <div>
                <p className={sectionTitleClass}>Profile Sheet</p>
                <p className="mt-2 text-sm text-[var(--portfolio-muted)]">
                  Selected signals recruiters care about most.
                </p>
              </div>
              <span className="rounded-full bg-[var(--portfolio-soft)] px-3 py-1 text-xs text-[var(--portfolio-ink)]">
                Available for senior frontend roles
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`grid gap-3 rounded-[1.5rem] border border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] p-5 ${index === 0 ? 'lg:grid-cols-[1.2fr_0.8fr]' : ''}`}
                >
                  <div>
                    <p className="text-xs tracking-[0.18em] text-[var(--portfolio-muted)] uppercase">
                      {item.label}
                    </p>
                    <p className="mt-3 text-xl leading-snug font-semibold tracking-[-0.04em]">
                      {item.value}
                    </p>
                  </div>
                  <p className="text-sm leading-6 text-[var(--portfolio-muted)]">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.9rem] bg-[var(--portfolio-ink)] p-6 text-[var(--portfolio-surface)]">
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
                I care about frontend work that feels calm on the surface and stays resilient
                underneath: clear architecture, thoughtful interaction, and predictable delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] px-6 py-10 sm:px-10 lg:px-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="[font-family:var(--font-display)] text-4xl font-semibold tracking-[-0.07em]">
              {profile.yearsOfExperience}
            </p>
            <p className="mt-2 text-sm text-[var(--portfolio-muted)]">
              Years shipping production frontend
            </p>
          </div>
          <div>
            <p className="[font-family:var(--font-display)] text-4xl font-semibold tracking-[-0.07em]">
              15
            </p>
            <p className="mt-2 text-sm text-[var(--portfolio-muted)]">
              Largest team size led on current project
            </p>
          </div>
          <div>
            <p className="[font-family:var(--font-display)] text-4xl font-semibold tracking-[-0.07em]">
              4
            </p>
            <p className="mt-2 text-sm text-[var(--portfolio-muted)]">
              Product sectors with hands-on delivery
            </p>
          </div>
          <div>
            <p className="[font-family:var(--font-display)] text-4xl font-semibold tracking-[-0.07em]">
              3
            </p>
            <p className="mt-2 text-sm text-[var(--portfolio-muted)]">
              International markets served
            </p>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="relative grid gap-14 px-6 py-18 sm:px-10 lg:grid-cols-[0.62fr_1.38fr] lg:px-14 lg:py-22"
      >
        <div className="space-y-4">
          <p className={sectionTitleClass}>Experience</p>
          <h2 className="[font-family:var(--font-display)] text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
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
              className="grid gap-5 rounded-[1.9rem] border border-[var(--portfolio-line)] bg-[var(--portfolio-card)] p-7 shadow-[0_14px_50px_var(--portfolio-shadow)] lg:grid-cols-[10rem_1fr]"
            >
              <div>
                <p className="text-xs tracking-[0.18em] text-[var(--portfolio-muted)] uppercase">
                  {experience.period}
                </p>
              </div>
              <div>
                <p className="[font-family:var(--font-display)] text-2xl font-semibold tracking-[-0.05em]">
                  {experience.company}
                </p>
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
        className="relative bg-[linear-gradient(135deg,rgba(20,46,48,1),rgba(38,76,73,0.96))] px-6 py-18 text-[var(--portfolio-surface)] sm:px-10 lg:px-14 lg:py-22"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.28em] text-[rgba(249,196,156,0.9)] uppercase">
              Featured project
            </p>
            <h2 className="[font-family:var(--font-display)] text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
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
        className="relative grid gap-14 px-6 py-18 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:px-14 lg:py-22"
      >
        <div className="space-y-4">
          <p className={sectionTitleClass}>Skills</p>
          <h2 className="[font-family:var(--font-display)] text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
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
              className="rounded-[1.9rem] border border-[var(--portfolio-line)] bg-[var(--portfolio-card)] p-6"
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
        className="relative grid gap-12 border-t border-[var(--portfolio-line)] bg-[var(--portfolio-panel)] px-6 py-18 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14 lg:py-22"
      >
        <div className="space-y-4">
          <p className={sectionTitleClass}>Education</p>
          <h2 className="[font-family:var(--font-display)] text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
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
