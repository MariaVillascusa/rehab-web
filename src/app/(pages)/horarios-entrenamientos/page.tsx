import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { scheduleNotes, trainingSchedule } from "@/lib/extra-pages-data";
import { trainingWhatsAppHref } from "@/lib/home-page-data";

export const metadata: Metadata = {
  title: "Horarios de Entrenamientos",
  description:
    "Consulta los horarios disponibles para entrenamientos en Rehab Strength (Molina de Segura, Murcia) y confirma tu plaza por WhatsApp.",
};

export default function HorariosEntrenamientosPage() {
  return (
    <main className="page-flow">
        <section className="hero-section">
          <div className="electric-lines" aria-hidden="true" />
          <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
          <p className="eyebrow">Horarios</p>
          <h1 className="hero-title">Horarios de entrenamientos</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              Consulta los horarios disponibles y solicita tu plaza por WhatsApp. Te confirmamos
              disponibilidad y el grupo más adecuado para tu nivel.
            </p>
          </div>
        </section>

        <section className="section-wrap pb-20">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07101b]/75 shadow-[0_0_60px_rgba(0,166,255,0.12)]">
            <div className="grid grid-cols-[1fr] border-b border-white/10 bg-white/3 px-5 py-4 md:grid-cols-[180px_1fr]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8ed8ff]">Día</p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8ed8ff]">Turnos</p>
            </div>

            {trainingSchedule.map((row) => (
              <div
                key={row.day}
                className="grid gap-3 border-b border-white/5 px-5 py-4 last:border-b-0 md:grid-cols-[180px_1fr] md:items-center"
              >
                <p className="font-display text-2xl text-white">{row.day}</p>
                <div className="flex flex-wrap gap-2">
                  {row.slots.map((slot) => (
                    <span
                      key={slot}
                      className="inline-flex items-center rounded-full border border-[#00a6ff]/30 bg-[#00a6ff]/8 px-3 py-1 text-sm font-semibold text-slate-100"
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {scheduleNotes.map((note) => (
              <div key={note} className="pillar-item px-4 py-3">
                <p className="text-sm text-slate-200">{note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton href={trainingWhatsAppHref} className="btn-primary gap-2">
              Solicita plaza
            </WhatsAppButton>
            <Link href="/tarifas" className="btn-ghost">
              Ver tarifas
            </Link>
          </div>
        </section>
    </main>
  );
}
