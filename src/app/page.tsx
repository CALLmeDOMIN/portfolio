import Link from "next/link";
import Section from "./components/Section";
import TimelineEntry from "./components/TimelineEntry";
import ToolCard from "./components/ToolCard";
import { loadMaintained, loadTools, loadWork } from "@/lib/content/load";

export default async function Home() {
  const [work, maintained, tools] = await Promise.all([
    loadWork(),
    loadMaintained(),
    loadTools(),
  ]);

  return (
    <main id="top" className="min-w-0 flex-1 px-6 pb-24 md:px-10">
      <div className="flex min-h-[78vh] flex-col justify-center py-20 md:min-h-[86vh]">
        <p className="text-accent font-mono text-[11px] tracking-[0.18em] uppercase">
          Kraków, Poland
        </p>
        {/* leading-[0.95], not tighter: the acute on Ń collides with the line
            above at 0.86, and the name is the one thing that must not break. */}
        <h1 className="font-display mt-5 text-[clamp(3.5rem,11vw,9.5rem)] leading-[0.95] uppercase">
          Dominik
          <br />
          Sieroń
        </h1>
        <p className="mt-7 max-w-[46ch] text-xl leading-relaxed md:text-2xl">
          I build things that end up touching something physical.
        </p>
        <p className="text-muted mt-4 max-w-[52ch] leading-relaxed">
          Software engineer at{" "}
          <Link
            href="https://praca.goodlood.com/dev-team"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent underline underline-offset-4 transition-colors"
          >
            AVSystem
          </Link>
          , on the team behind Good Lood&apos;s app, point of sale and
          production tooling. Before that, freezers and delivery vans were
          somebody else&apos;s problem.
        </p>
      </div>

      <Section id="work" code="01" title="Work">
        {work.map((entry) => (
          <TimelineEntry
            key={entry.slug}
            organization={entry.company}
            role={entry.title}
            url={entry.companyUrl}
            logo={entry.logo}
            dateStart={entry.dateStart}
            dateEnd={entry.dateEnd}
            tech={entry.tech}
            body={entry.body}
          />
        ))}
      </Section>

      <Section id="shipped" code="02" title="Shipped">
        {maintained.map((entry) => (
          <TimelineEntry
            key={entry.slug}
            organization={entry.title}
            role={entry.role}
            url={entry.url}
            logo={entry.logo}
            dateStart={entry.dateStart}
            dateEnd={entry.dateEnd}
            tech={entry.tech}
            body={entry.body}
          />
        ))}
      </Section>

      <Section id="tools" code="03" title="Built for myself">
        <p className="text-prose mb-8 max-w-[62ch] leading-relaxed">
          Small things I use daily. Each one exists because what was on the
          market was either subscription-gated or padded with features I had no
          use for.
        </p>
        <div className="border-line bg-line grid gap-px border">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </Section>

      <Section id="contact" code="04" title="Contact">
        <p className="text-prose max-w-[52ch] leading-relaxed">
          Mail or Discord. I will always try to respond.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
          <Link
            href="mailto:contact@dsieron.pl"
            className="text-accent hover:text-text transition-colors"
          >
            contact@dsieron.pl
          </Link>
          <Link
            href="https://discord.com/users/320254777160368139"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Discord
          </Link>
        </div>
        <p className="text-muted mt-16 font-mono text-[11px] tracking-[0.18em] uppercase">
          &copy; {new Date().getFullYear()} Dominik Sieroń
        </p>
      </Section>
    </main>
  );
}
