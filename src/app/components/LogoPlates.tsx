/**
 * Logo marks, joined by × when an entry spans more than one organization
 * ("AVSystem × Good Lood").
 *
 * Normalised by height, not boxed into squares. These marks have very
 * different aspect ratios — AVSystem is 150×150, Good Lood 293×232, SKN
 * 126×55 — so a square box fits the wide ones by width and renders them
 * visibly smaller than the square ones. Matching optical height instead is how
 * mixed logos are usually set.
 *
 * Plain img rather than next/image: these are local static assets, five of the
 * six are SVG so there is nothing to optimise, and height-normalised sizing
 * needs an intrinsic width that next/image's fill mode cannot give.
 *
 * No plate and no filter — every mark here is dark-safe in its own right.
 *
 * Decorative: the organization is named in the adjacent heading, which is also
 * the link, so alt text would only duplicate it.
 */
export default function LogoPlates({ logos }: { logos: readonly string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-3" aria-hidden>
      {logos.map((src, i) => (
        <div key={src} className="flex items-center gap-3">
          {i > 0 && <span className="text-accent font-mono text-lg">×</span>}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            className="h-11 w-auto max-w-24 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 md:h-14 md:max-w-32"
          />
        </div>
      ))}
    </div>
  );
}
