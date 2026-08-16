import { type Metadata } from "next";
import { formatDateRange } from "@/lib/format";
import { loadMaintained, loadTools, loadWork } from "@/lib/content/load";
import { resolveTech } from "@/lib/tech";

export const metadata: Metadata = {
  // Becomes the default filename when printing to PDF, so keep it plain.
  title: "Dominik Sieron CV",
  robots: { index: false, follow: false },
};

/**
 * The CV, generated from the same MDX the site renders. One source, two
 * outputs: the site reads the prose bodies, this reads the `highlights`
 * bullets, falling back to the opening paragraph where an entry has none.
 *
 * Rendered light rather than dark-with-a-print-override, because a CV is a
 * document and what you review should be what the exported PDF looks like.
 * Print to PDF from the browser; page setup lives in globals.css.
 */
export default async function CV() {
  const [work, maintained, tools] = await Promise.all([
    loadWork(),
    loadMaintained(),
    loadTools(),
  ]);

  const lines = (highlights: readonly string[] | undefined, body: string) =>
    highlights?.length
      ? highlights
      : [body.split("\n\n")[0].replace(/\n/g, " ")];

  return (
    <div className="cv-page min-h-screen bg-neutral-200 py-8 print:bg-white print:py-0">
      <article className="cv-sheet mx-auto max-w-[210mm] bg-white px-[14mm] py-[13mm] text-[10.5pt] leading-snug text-neutral-900 shadow-lg print:shadow-none">
        <header className="mb-5 border-b border-neutral-300 pb-4">
          <h1 className="text-[24pt] leading-none font-bold tracking-tight">
            Dominik Sieroń
          </h1>
          <p className="mt-1.5 text-[11pt] text-neutral-700">
            Software Engineer · Kraków, Poland
          </p>
          <p className="mt-2 text-[9pt] text-neutral-600">
            contact@dsieron.pl · github.com/CALLmeDOMIN ·
            linkedin.com/in/dominiksieron · dsieron.pl
          </p>
        </header>

        <Block title="Experience">
          {work.map((e) => (
            <Entry
              key={e.slug}
              heading={e.company}
              sub={e.title}
              meta={formatDateRange(e.dateStart, e.dateEnd)}
              points={lines(e.highlights, e.body)}
              tech={e.tech}
            />
          ))}
        </Block>

        <Block title="Shipped & maintained">
          {maintained.map((e) => (
            <Entry
              key={e.slug}
              heading={e.title}
              sub={e.role}
              meta={e.dateStart ? formatDateRange(e.dateStart, e.dateEnd) : ""}
              points={lines(e.highlights, e.body)}
              tech={e.tech}
            />
          ))}
        </Block>

        <Block title="Built for myself">
          {tools.map((t) => (
            <div key={t.slug} className="mb-2.5 break-inside-avoid last:mb-0">
              <p className="font-semibold">
                {t.title}
                {t.replaces && (
                  <span className="font-normal text-neutral-600">
                    {" · instead of "}
                    {t.replaces}
                  </span>
                )}
              </p>
              <p className="text-neutral-800">
                {t.body.split("\n\n")[0].replace(/\n/g, " ")}
              </p>
              <Tech tech={t.tech} />
            </div>
          ))}
        </Block>

        <Block title="Education">
          <Entry
            heading="AGH University of Kraków"
            sub="Informatyka Techniczna"
            meta=""
            points={[
              "Engineer's degree (inż.) completed. Master's degree in progress.",
            ]}
          />
        </Block>
      </article>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5 last:mb-0">
      <h2 className="mb-2.5 border-b border-neutral-300 pb-1 text-[10pt] font-bold tracking-[0.14em] uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Entry({
  heading,
  sub,
  meta,
  points,
  tech,
}: {
  heading: string;
  sub: string;
  meta: string;
  points: readonly string[];
  tech?: readonly string[];
}) {
  return (
    <div className="mb-3.5 break-inside-avoid last:mb-0">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-semibold">
          {heading}
          <span className="font-normal text-neutral-700"> · {sub}</span>
        </p>
        {meta && (
          <p className="shrink-0 text-[9pt] whitespace-nowrap text-neutral-600">
            {meta}
          </p>
        )}
      </div>
      <ul className="mt-1 list-disc space-y-0.5 pl-4 text-neutral-800 marker:text-neutral-400">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      {tech && <Tech tech={tech} />}
    </div>
  );
}

function Tech({ tech }: { tech: readonly string[] }) {
  return (
    <p className="mt-1 text-[9pt] text-neutral-600">
      {tech.map((k) => resolveTech(k).label).join(" · ")}
    </p>
  );
}
