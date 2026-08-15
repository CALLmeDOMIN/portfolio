import { z } from "zod";
import { TECH_KEYS } from "@/lib/tech";

const techKey = z.enum(TECH_KEYS);

const common = {
  title: z.string().min(1),
  tech: z
    .array(techKey)
    .min(1)
    .refine((keys) => new Set(keys).size === keys.length, {
      message: "duplicate tech keys",
    }),
  order: z.number().int().nonnegative(),
};

export const workSchema = z.object({
  ...common,
  company: z.string().min(1),
  companyUrl: z.url(),
  logo: z.string().startsWith("/").nullable(),
  dateStart: z.date(),
  dateEnd: z.date().nullable(),
});

export const maintainedSchema = z.object({
  ...common,
  role: z.string().min(1),
  url: z.url(),
  logo: z.string().startsWith("/").nullable(),
  dateStart: z.date().nullable(),
  dateEnd: z.date().nullable(),
});

export const toolSchema = z.object({
  ...common,
  replaces: z.string().min(1).nullable(),
});
