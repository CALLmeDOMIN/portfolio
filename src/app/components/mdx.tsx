import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { type ComponentProps } from "react";

const components = {
  p: (props: ComponentProps<"p">) => (
    <p className="mb-4 leading-relaxed last:mb-0" {...props} />
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="text-accent font-semibold" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="mb-4 list-disc space-y-1 pl-5 last:mb-0" {...props} />
  ),
  a: ({ href = "#", ...props }: ComponentProps<"a">) => (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent underline underline-offset-4"
      {...props}
    />
  ),
};

export function Prose({ source }: { source: string }) {
  return <MDXRemote source={source} components={components} />;
}
