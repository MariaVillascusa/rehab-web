"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";

const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/tarifas", label: "Tarifas" },
  { href: "/horarios-entrenamientos", label: "Horarios" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-300/80 bg-[#f5f7fb]/92 shadow-[0_8px_30px_rgba(5,18,35,0.08)] backdrop-blur-md">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 lg:px-10"
        aria-label="Principal"
      >
        <Link href="/" className="group inline-flex items-center gap-3">
          <Logo className="logo-image" priority />
          <span className="font-display text-2xl tracking-wide text-slate-900">Rehab Strength</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "text-[#0c7fd6]" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/#reserva" className="btn-primary hidden md:inline-flex">
          Solicita cita
        </Link>
      </nav>
    </header>
  );
}
