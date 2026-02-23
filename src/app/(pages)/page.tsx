import type { Metadata } from "next";
import Link from "next/link";
import { WhatsAppBookingSection } from "@/components/whatsapp-booking-section";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  homeJsonLd,
  physioWhatsAppHref,
  pillars,
  services,
  team,
  testimonials,
  trainingWhatsAppHref,
} from "@/lib/home-page-data";

export const metadata: Metadata = {
  title: "Centro de Rehabilitacion y Rendimiento",
  description:
    "Rehab Strength: fisioterapia y entrenamiento personalizado para recuperarte con seguridad y volver mas fuerte.",
};

export default function Home() {
  return (
    <>
      <main id="inicio" className="page-flow">
        <section className="hero-section">
          <div className="electric-lines" aria-hidden="true" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
            <div>
              <p className="mb-6 inline-flex items-center rounded-full border border-[#00a6ff]/45 bg-[#00a6ff]/10 px-4 py-1 text-sm font-semibold text-[#8ed8ff]">
                Recuperacion inteligente. Fuerza controlada.
              </p>
              <h1 className="hero-title">
                Vuelve a moverte <span className="text-[#00a6ff]">sin dolor</span> y con mas
                potencia.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                En Rehab Strength unimos fisioterapia y entrenamiento para acelerar tu
                recuperacion, prevenir recaidas y devolverte confianza en cada movimiento.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#reserva" className="btn-primary">
                  Solicita cita
                </a>
                <Link href="/servicios" className="btn-ghost">
                  Ver servicios
                </Link>
              </div>
            </div>

            <aside className="stats-panel" aria-label="Resultados">
              <h2 className="font-display text-3xl text-white">Resultados medibles</h2>
              <div className="mt-8 grid gap-6">
                <div>
                  <p className="text-3xl font-bold text-[#00a6ff]">+1.200</p>
                  <p className="text-slate-300">sesiones completadas con seguimiento clinico</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#00a6ff]">92%</p>
                  <p className="text-slate-300">de pacientes retoman su actividad con seguridad</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#00a6ff]">48h</p>
                  <p className="text-slate-300">para iniciar tu plan personalizado de recuperacion</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="servicios" className="section-wrap">
          <div className="section-heading">
            <p className="eyebrow">Servicios</p>
            <h2>Dos disciplinas, un solo objetivo: recuperar tu mejor version.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="info-card">
                <span className="icon-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 12h14M12 5v14" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <WhatsAppButton href={service.whatsappHref} className="btn-ghost mt-5 w-full gap-2">
                  {service.ctaLabel}
                </WhatsAppButton>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/servicios" className="btn-ghost">
              Ver detalle de servicios
            </Link>
            <Link href="/tarifas" className="btn-ghost">
              Ver tarifas
            </Link>
            <Link href="/horarios-entrenamientos" className="btn-ghost">
              Ver horarios
            </Link>
          </div>
        </section>

        <section id="metodologia" className="section-wrap">
          <div className="section-heading">
            <p className="eyebrow">Metodologia</p>
            <h2>Proceso clinico claro, progresion segura y foco en resultados duraderos.</h2>
          </div>
          <div className="mt-10 grid gap-4">
            {pillars.map((item) => (
              <div key={item} className="pillar-item">
                <span aria-hidden="true" className="bolt-dot" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="equipo" className="section-wrap">
          <div className="section-heading">
            <p className="eyebrow">Equipo profesional</p>
            <h2>Expertos en recuperacion funcional, readaptacion y fuerza terapeutica.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <article key={member.name} className="team-card">
                <div className="avatar-ring" aria-hidden="true">
                  {member.name
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap">
          <div className="section-heading">
            <p className="eyebrow">Testimonios</p>
            <h2>Pacientes que recuperaron movilidad, confianza y rendimiento.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="testimonial-card">
                <p>{item.quote}</p>
                <footer>{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <WhatsAppBookingSection
          physioHref={physioWhatsAppHref}
          trainingHref={trainingWhatsAppHref}
        />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
    </>
  );
}
