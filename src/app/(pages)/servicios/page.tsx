import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { detailedServices } from "@/lib/extra-pages-data";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de fisioterapia y entrenamiento fisico en Rehab Strength para recuperacion, readaptacion y fuerza.",
};

export default function ServiciosPage() {
  return (
    <main className="page-flow">
        <section className="hero-section">
          <div className="electric-lines" aria-hidden="true" />
          <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
            <p className="eyebrow">Servicios</p>
            <h1 className="hero-title">Fisioterapia y entrenamiento fisico</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              Dos servicios complementarios para recuperar movimiento, reducir dolor y construir una
              base de fuerza segura y sostenible.
            </p>
          </div>
        </section>

        <section className="section-wrap pb-20">
          <div className="grid gap-6 md:grid-cols-2">
            {detailedServices.map((service) => (
              <article key={service.title} className="info-card flex h-full flex-col">
                <p className="eyebrow">{service.title}</p>
                <h2 className="font-display text-3xl text-white">{service.subtitle}</h2>
                <p className="mt-4 text-slate-300">{service.description}</p>
                <ul className="mt-5 grid gap-3 text-sm text-slate-200">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-[#00a6ff]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppButton href={service.whatsappHref} className="btn-primary mt-6 w-full gap-2 md:w-fit">
                  Reserva
                </WhatsAppButton>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/tarifas" className="btn-ghost">
              Ver tarifas
            </Link>
            <Link href="/horarios-entrenamientos" className="btn-ghost">
              Ver horarios de entrenamiento
            </Link>
          </div>
        </section>
    </main>
  );
}
