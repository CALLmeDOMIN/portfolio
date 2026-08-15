import {
  IconBrandAstro,
  IconBrandDjango,
  IconBrandGatsby,
  IconBrandGolang,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandSass,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { type ComponentType } from "react";

type TechEntry = {
  label: string;
  Icon?: ComponentType<{ size?: number; className?: string }>;
};

export const TECH = {
  astro: { label: "Astro", Icon: IconBrandAstro },
  django: { label: "Django", Icon: IconBrandDjango },
  electron: { label: "Electron" },
  gatsby: { label: "Gatsby", Icon: IconBrandGatsby },
  golang: { label: "Go", Icon: IconBrandGolang },
  java: { label: "Java" },
  javascript: { label: "JavaScript", Icon: IconBrandJavascript },
  mongodb: { label: "MongoDB", Icon: IconBrandMongodb },
  nextjs: { label: "Next.js", Icon: IconBrandNextjs },
  postgresql: { label: "PostgreSQL" },
  react: { label: "React", Icon: IconBrandReact },
  "react-native": { label: "React Native", Icon: IconBrandReactNative },
  "ruby-on-rails": { label: "Ruby on Rails" },
  sass: { label: "Sass", Icon: IconBrandSass },
  spring: { label: "Spring" },
  tailwindcss: { label: "Tailwind CSS", Icon: IconBrandTailwind },
  typescript: { label: "TypeScript", Icon: IconBrandTypescript },
} as const satisfies Record<string, TechEntry>;

export type TechKey = keyof typeof TECH;

export const TECH_KEYS = Object.keys(TECH) as [TechKey, ...TechKey[]];

export function resolveTech(key: string): TechEntry {
  const entry = (TECH as Record<string, TechEntry | undefined>)[key];
  if (!entry) {
    throw new Error(
      `Unknown tech key "${key}". Add it to src/lib/tech.ts or fix the content file.`,
    );
  }
  return entry;
}
