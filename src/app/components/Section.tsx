import { type ReactNode } from "react";

export default function Section({
  id,
  title,
  icon,
  children,
  className = "",
}: {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-4 py-14 ${className}`}>
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="flex items-center">
          <span className="text-accent mr-2">{icon}</span>
          <h2 className="text-4xl font-bold md:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
