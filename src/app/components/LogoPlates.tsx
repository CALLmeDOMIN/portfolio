import Image from "next/image";

/**
 * Logo marks as light plates, joined by × when an entry spans more than one
 * organization ("AVSystem × Good Lood").
 *
 * The plates are light on purpose. These marks were drawn for white: SKN's is
 * partly black and SpotOn's symbol is #090D12, so both disappear on this
 * background, and the UXberries mark is a JPEG carrying its own white. Forcing
 * them all white at rest fixed visibility but threw away SpotOn's blue and
 * Good Lood's palette. A light plate keeps every brand's real colour and reads
 * as an asset tag, which suits the rest of the page.
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
          <div className="border-line relative size-14 overflow-hidden border bg-white md:size-[4.5rem]">
            <Image
              src={src}
              alt=""
              fill
              sizes="72px"
              className="object-contain p-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
