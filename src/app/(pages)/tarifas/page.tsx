import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { pricingBlocks } from "@/lib/extra-pages-data";

export const metadata: Metadata = {
  title: "Tarifas",
  description:
    "Consulta tarifas de fisioterapia y entrenamiento fisico en Rehab Strength. Confirmacion final por WhatsApp.",
};

export default function TarifasPage() {
  return (
    <main className="page-flow">
        <section className="hero-section">
          <div className="electric-lines" aria-hidden="true" />
          <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
            <p className="eyebrow">Tarifas</p>
            <h1 className="hero-title">Opciones de sesiones y bonos</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              Página preparada para mostrar precios por servicio. Puedes actualizar los importes
              cuando el cliente los confirme.
            </p>
          </div>
        </section>

        <section className="section-wrap pb-20">
          <div className="grid gap-6 md:grid-cols-2">
            {pricingBlocks.map((block) => (
              <article key={block.category} className="info-card flex h-full flex-col">
                <p className="eyebrow">{block.category}</p>
                <h2 className="font-display text-3xl text-white">Tarifas {block.category.toLowerCase()}</h2>
                <div className="mt-6 grid gap-4">
                  {block.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl border border-white/10 bg-white/3 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-semibold text-white">{item.name}</p>
                        <p className="font-display text-2xl text-[#8ed8ff]">{item.price}</p>
                      </div>
                      <p className="mt-2 text-sm text-slate-300">{item.note}</p>
                    </div>
                  ))}
                </div>
                <WhatsAppButton href={block.whatsappHref} className="btn-primary mt-6 w-full gap-2 md:w-fit">
                  Solicita informacion
                </WhatsAppButton>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#00a6ff]/20 bg-[#07101b]/75 p-5 text-sm text-slate-300">
            <p>
              Los importes pueden variar segun frecuencia, duracion de sesion y objetivos de
              recuperacion/readaptacion.
            </p>
          </div>

          <div className="mt-8">
            <Link href="/servicios" className="btn-ghost">
              Ver servicios
            </Link>
          </div>
        </section>
    </main>
  );
}
