import {
  IconAddressBook,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconMail,
  IconSubtask,
  IconTool,
} from "@tabler/icons-react";
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
    <div className="mt-14">
      <main
        id="home"
        className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4"
      >
        <p className="text-3xl font-extralight">Hi, my name is</p>
        <h1 className="text-primary -ml-1 text-6xl font-semibold md:text-7xl">
          Dominik Sieroń.
        </h1>
        <p className="mt-4 max-w-[55ch] pb-2 pl-2 text-xl">
          Software engineer at <span className="text-accent">AVSystem</span>, on
          the team building the app, point-of-sale and production systems an ice
          cream chain runs on. Engineer&apos;s degree in Informatyka Techniczna
          from <span className="text-accent">AGH University of Kraków</span>,
          currently doing the master&apos;s.
        </p>
        <div className="flex items-center gap-2 pl-2">
          <div className="bg-secondary h-0.5 w-4" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            href="https://github.com/CALLmeDOMIN"
            aria-label="GitHub profile"
          >
            <IconBrandGithub size={24} />
          </Link>
          <div className="bg-secondary h-0.5 w-0.5" />
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            href="https://www.linkedin.com/in/dominiksieron/"
            aria-label="LinkedIn profile"
          >
            <IconBrandLinkedin size={24} />
          </Link>
          <div className="bg-secondary h-0.5 w-[40%]" />
        </div>
      </main>

      <Section
        id="now"
        title="Work"
        icon={<IconBriefcase size={44} />}
        className="bg-secondary text-white"
      >
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

      <div className="bg-background h-4 w-full" />

      <Section
        id="maintained"
        title="Shipped & maintained"
        icon={<IconSubtask size={44} />}
        className="bg-secondary text-white"
      >
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

      <Section
        id="tools"
        title="Tools I built for myself"
        icon={<IconTool size={44} />}
      >
        <p className="max-w-[65ch] text-lg">
          Small things I use daily. Each one exists because what was on the
          market was either subscription-gated or padded with features I had no
          use for.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        title="Contact"
        icon={<IconAddressBook size={44} />}
      >
        <div className="space-y-4">
          <p className="text-lg">
            Mail or Discord. I will always try to respond.
          </p>
          <div className="flex gap-4">
            <Link
              aria-label="Email"
              href="mailto:contact@dsieron.pl"
              className="bg-primary text-background flex rounded-md p-2 px-4"
            >
              <IconMail />
            </Link>
            <Link
              aria-label="Discord"
              href="https://discord.com/users/320254777160368139"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-background flex rounded-md p-2 px-4"
            >
              <IconBrandDiscord />
            </Link>
          </div>
        </div>
      </Section>

      <footer className="bg-secondary flex items-center p-4 font-semibold shadow-md">
        <p>&copy; {new Date().getFullYear()} Dominik Sieroń</p>
      </footer>
    </div>
  );
}
