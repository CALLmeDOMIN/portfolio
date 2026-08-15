import Image from "next/image";

/**
 * Logo marks, joined by × when an entry spans more than one organization
 * ("AVSystem × Good Lood").
 *
 * No plate and no filter. Every mark here is dark-safe in its own right —
 * AVSystem's is their reversed "sygnet", UXberries publish a white variant,
 * SpotOn's is blue once its white backing rect is removed, Good Lood's SVG is
 * transparent, and SKN's near-black was lifted to frost for dark use. Earlier
 * attempts compensated for bad assets with a white plate, which drowned the
 * page, or with a white filter, which threw the brand colours away.
 *
 * Decorative: the organization is named in the adjacent heading, which is also
 * the link, so alt text would only duplicate it.
 */
export default function LogoPlates({ logos }: { logos: readonly string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-3" aria-hidden>
      {logos.map((src, i) => (
        <div key={src} className="flex items-center gap-3">
          {i > 0 && <span className="text-muted font-mono text-sm">×</span>}
          <div className="relative size-12 md:size-14">
            <Image
              src={src}
              alt=""
              fill
              sizes="56px"
              className="object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
