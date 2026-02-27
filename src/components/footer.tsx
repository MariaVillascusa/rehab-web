import Link from "next/link";
import {
  contactInfo,
  physioWhatsAppHref,
  trainingWhatsAppHref,
  homeJsonLd,
} from "@/lib/home-page-data";

import {
  InstagramIcon,
  PhoneIcon,
  LocationIcon,
  EmailIcon,
} from "@/components/Icons";

export function Footer() {
  return (
    <footer className="border-t bg-footer mt-9">
      <div className="mx-auto w-full px-6 py-12 lg:px-10">
        {/* TOP SECTION */}
        <div className="grid gap-2 lg:grid-cols-2 ">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <InstagramIcon />
              <a
                href="https://www.instagram.com/rm_fisiodeportiva/"
                aria-label="Instagram"
                target="_blanck"
              >
                {contactInfo.instagramLabel}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <EmailIcon />
              <a href={`mailto:${contactInfo.email}`} target="_blanck">
                {contactInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <PhoneIcon />
              <p>Fisioterapia:</p>
              <a href={physioWhatsAppHref} target="_blank">
                {contactInfo.physioPhoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <PhoneIcon />
              <p>Entrenamiento:</p>
              <a href={trainingWhatsAppHref} target="_blank">
                {contactInfo.trainingPhoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <LocationIcon />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${homeJsonLd.address.addressStreet}, ${homeJsonLd.address.addressLocality}, ${homeJsonLd.address.addressRegion}, ${homeJsonLd.address.addressCountry}, ${homeJsonLd.address.addressPostCode}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>
                  {homeJsonLd.address.addressStreet} ,{" "}
                  {homeJsonLd.address.addressLocality},{" "}
                  {homeJsonLd.address.addressRegion},{" "}
                  {homeJsonLd.address.addressCountry},{" "}
                  {homeJsonLd.address.addressPostCode}
                </p>
              </a>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-20 items-end">
            <div className="flex flex-col gap-4 text-end">
              <Link href="/servicios">Servicios</Link>
              <Link href="/tarifas">Tarifas</Link>
              <Link href="/horarios-entrenamientos">Horarios</Link>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-3 border-t" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mx-5">
          <p className="text-sm">
            © {new Date().getFullYear()} Rehab Strength. Todos los derechos
            reservados.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/aviso-legal">Aviso Legal</Link>
            <Link href="/politica-privacidad">Política de Privacidad</Link>
            <Link href="/politica-cookies">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
