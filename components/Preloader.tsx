import Image from "next/image";

import monogram from "@/public/images/brand/monogram-cream.png";

/*
 * Opening moment: CSS only, so it costs no JavaScript and can't get stuck.
 * pointer-events-none means it never blocks a click; hidden entirely under reduced motion (see globals.css).
 */
export function Preloader() {
  return (
    <div aria-hidden="true" className="preloader pointer-events-none fixed inset-0 z-[60] items-center justify-center bg-night">
      {/* unoptimized: a 6 KB static file served instantly, rather than waiting on the image optimiser */}
      <Image src={monogram} alt="" width={101} height={80} unoptimized loading="eager" className="preloader-mark" />
    </div>
  );
}
