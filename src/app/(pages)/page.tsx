import type { Metadata } from "next";
import Image from "next/image";
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
    "Rehab Strength en Molina de Segura (Murcia): fisioterapia y entrenamiento personalizado para recuperarte con seguridad y volver más fuerte.",
};

export default function Home() {
  return (
    <>
      <main id="inicio" className="page-flow">
        <section className="hero-section">
          <div className="electric-lines" aria-hidden="true" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-24">
            <div>
              <p className="mb-6 inline-flex items-center rounded-full border border-[#00a6ff]/45 bg-[#00a6ff]/10 px-4 py-1 text-sm font-semibold text-[#8ed8ff]">
                Centro de fisioterapia y rendimiento en Molina de Segura (Murcia)
              </p>
              <h1 className="hero-title">
                <span className="text-[clamp(2.8rem,6.8vw,4.6rem)] leading-[0.95]">
                  Tratamos el dolor. <span className="text-[#00a6ff]">Construimos fuerza.</span>
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                En Rehab Strength combinamos fisioterapia y entrenamiento para ayudarte a recuperarte,
                volver a tu actividad y reducir el riesgo de recaídas.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#reserva" className="btn-primary">
                  Reserva tu valoración / cita
                </a>
                <Link href="/servicios" className="btn-ghost">
                  Ver servicios
                </Link>
              </div>
            </div>

            <div>
              <div className="stats-panel overflow-hidden p-0">
                <div className="relative h-[320px] w-full md:h-[420px]">
                  <Image
                    src="/images/green.avif"
                    alt="Material de entrenamiento en el centro Rehab Strength"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03060c]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#050a12]/80 p-4 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8ed8ff]">
                      Centro especializado
                    </p>
                    <p className="mt-2 text-sm text-slate-200">
                      Recuperación y fuerza en un mismo proceso, con seguimiento y progresión.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="section-wrap">
          <div className="section-heading">
            <p className="eyebrow">Qué ofrecemos</p>
            <h2>Dos servicios que trabajan juntos para acelerar tu recuperación.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="info-card flex flex-col">
                <span className="icon-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M5 12h14M12 5v14" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00a6ff]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href={service.pageHref} className="btn-ghost">
                    Ver {service.title.toLowerCase()}
                  </Link>
                  <WhatsAppButton href={service.whatsappHref} className="btn-ghost gap-2">
                    {service.ctaLabel}
                  </WhatsAppButton>
                </div>
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
            <p className="eyebrow">Diferencial del centro</p>
            <h2>No somos un gimnasio generalista ni un centro de “solo camilla”.</h2>
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

        <section className="section-wrap">
          <div className="section-heading">
            <p className="eyebrow">Sobre nosotros</p>
            <h2>Experiencia clínica y entrenamiento para acompañarte en todo el proceso.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07101b]/75">
              <div className="relative h-80 w-full lg:h-full lg:min-h-[420px]">
                <Image src="/images/grey.avif" alt="Rack y zona de trabajo del centro en Molina de Segura" fill className="object-cover" />
              </div>
            </div>
            <div className="info-card">
              <h3 className="font-display text-3xl text-white">Salud y rendimiento en el mismo plan</h3>
              <p className="mt-4 text-slate-300">
                Trabajamos con personas que quieren dejar atrás el dolor, recuperar su actividad y
                seguir entrenando con una base sólida y segura.
              </p>
              <div className="mt-6 grid gap-3">
                <div className="pillar-item px-4 py-3">
                  <p>Formación y actualización continua del equipo.</p>
                </div>
                <div className="pillar-item px-4 py-3">
                  <p>Comunicación entre fisioterapia y entrenamiento para cada caso.</p>
                </div>
                <div className="pillar-item px-4 py-3">
                  <p>Seguimiento continuo y objetivos claros para que sepas cómo avanzas.</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/servicios/fisioterapia" className="btn-ghost">
                  Fisioterapia
                </Link>
                <Link href="/servicios/entrenamiento" className="btn-ghost">
                  Entrenamiento
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="equipo" className="section-wrap">
          <div className="section-heading">
            <p className="eyebrow">Equipo profesional</p>
            <h2>Expertos en recuperación funcional, readaptación y fuerza terapéutica.</h2>
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
            <h2>Personas que volvieron a moverse, entrenar y confiar en su cuerpo.</h2>
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
