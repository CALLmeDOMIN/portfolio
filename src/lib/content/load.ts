import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { type z } from "zod";
import { maintainedSchema, toolSchema, workSchema } from "@/lib/content/schema";

const CONTENT_DIR = path.join(process.cwd(), "content");

function parseEntry<S extends z.ZodType<object>>(
  schema: S,
  raw: string,
  sourceId: string,
): z.infer<S> & { body: string } {
  const { data, content } = matter(raw);
  const result = schema.safeParse(data);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `  ${issue.path.join(".") || "(root)"}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid frontmatter in ${sourceId}:\n${issues}`);
  }

  const body = content.trim();
  if (body.length === 0) {
    throw new Error(`Invalid content in ${sourceId}: body is empty`);
  }

  return { ...result.data, body };
}

async function loadCollection<S extends z.ZodType<{ order: number }>>(
  dir: string,
  schema: S,
): Promise<Array<z.infer<S> & { slug: string; body: string }>> {
  const dirPath = path.join(CONTENT_DIR, dir);
  const filenames = (await fs.readdir(dirPath))
    .filter((name) => name.endsWith(".mdx"))
    .sort();

  if (filenames.length === 0) {
    throw new Error(`No .mdx files found in content/${dir}`);
  }

  const entries = await Promise.all(
    filenames.map(async (filename) => {
      const raw = await fs.readFile(path.join(dirPath, filename), "utf8");
      return {
        ...parseEntry(schema, raw, `content/${dir}/${filename}`),
        slug: filename.replace(/\.mdx$/, ""),
      };
    }),
  );

  return entries.sort((a, b) => a.order - b.order);
}

export function loadWork() {
  return loadCollection("work", workSchema);
}

export function loadMaintained() {
  return loadCollection("maintained", maintainedSchema);
}

export function loadTools() {
  return loadCollection("tools", toolSchema);
}

export type Work = Awaited<ReturnType<typeof loadWork>>[number];
export type Maintained = Awaited<ReturnType<typeof loadMaintained>>[number];
export type Tool = Awaited<ReturnType<typeof loadTools>>[number];
