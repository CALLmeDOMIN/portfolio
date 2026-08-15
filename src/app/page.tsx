import RollLink from "./components/RollLink";
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
    <div className="flex min-w-0 flex-1 flex-col">
      <main id="top" className="px-6 pb-20 md:px-10">
        <div className="flex min-h-[78vh] flex-col justify-center py-20 md:min-h-[86vh]">
          <p className="text-accent font-mono text-[11px] tracking-[0.18em] uppercase">
            Kraków, Poland
          </p>
          {/* leading-[1.1], measured rather than guessed: in Anton the acute on Ń
            rises 34px above cap height at 141px type, and a 0.95 line box
            leaves only 13px between lines, so the accent lands inside DOMINIK
            above it. 1.1 only just touches, so 1.15 for an actual gap. */}
          <h1 className="font-display mt-5 text-[clamp(3.5rem,11vw,9.5rem)] leading-[1.15] uppercase">
            Dominik
            <br />
            Sieroń
          </h1>
          <p className="mt-7 max-w-[46ch] text-xl leading-relaxed md:text-2xl">
            I build things that end up touching something physical.
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
            market was either subscription-gated or padded with features I had
            no use for.
          </p>
          <div className="border-line bg-line grid gap-px border">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Section>

        <Section id="contact" code="04" title="Contact">
          <p className="text-prose max-w-[52ch] leading-relaxed">
            Mail is best. I will always try to respond.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
            <RollLink
              href="mailto:contact@dsieron.pl"
              label="contact@dsieron.pl"
            />
            <RollLink
              href="https://github.com/CALLmeDOMIN"
              label="GitHub"
              external
            />
            <RollLink
              href="https://www.linkedin.com/in/dominiksieron/"
              label="LinkedIn"
              external
            />
          </div>
        </Section>
      </main>

      <footer className="border-line text-muted border-t px-6 py-8 font-mono text-[11px] tracking-[0.18em] uppercase md:px-10">
        &copy; {new Date().getFullYear()} Dominik Sieroń
      </footer>
    </div>
  );
}
