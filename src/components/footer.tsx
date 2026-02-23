import Link from "next/link";
import { contactInfo } from "@/lib/home-page-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020409]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p>© {new Date().getFullYear()} Rehab Strength. Recuperación y rendimiento con criterio clínico.</p>
        <div className="flex gap-6">
          <Link href="/servicios" className="nav-link">
            Servicios
          </Link>
          <Link href="/tarifas" className="nav-link">
            Tarifas
          </Link>
          <Link href="/horarios-entrenamientos" className="nav-link">
            Horarios
          </Link>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${contactInfo.email}`} className="nav-link">
            {contactInfo.email}
          </a>
          <a
            href={contactInfo.instagramHref}
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Instagram {contactInfo.instagramLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
