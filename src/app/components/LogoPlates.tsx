import Image from "next/image";

/**
 * Logo marks as bordered plates, joined by × when an entry spans more than one
 * organization ("AVSystem × Good Lood").
 *
 * Rendered pure white at rest and true colour on hover. That is not only for
 * cohesion across logos of mixed provenance — SpotOn's official symbol is
 * #090D12, which would be invisible against this background untreated.
 *
 * Decorative throughout: the organization is named in the adjacent heading,
 * which is also the link, so alt text would only duplicate it.
 */
export default function LogoPlates({ logos }: { logos: readonly string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-2" aria-hidden>
      {logos.map((src, i) => (
        <div key={src} className="flex items-center gap-2">
          {i > 0 && <span className="text-muted font-mono text-xs">×</span>}
          <div className="border-line bg-panel relative size-14 border md:size-[4.5rem]">
            <Image
              src={src}
              alt=""
              fill
              sizes="72px"
              className="object-contain p-2.5 opacity-70 brightness-0 invert transition duration-300 hover:opacity-100 hover:brightness-100 hover:invert-0"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
