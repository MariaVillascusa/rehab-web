import type { Metadata } from "next";
import { Logo } from "@/components/logo";

const WHATSAPP_PHONES = {
  physio: "34600123456",
  training: "34600123457",
} as const;

function buildWhatsAppLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="currentColor"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.62 2 2.2 6.41 2.2 11.84c0 1.74.45 3.44 1.31 4.95L2 22l5.36-1.4a9.86 9.86 0 0 0 4.68 1.19h.01c5.42 0 9.84-4.41 9.84-9.84 0-2.63-1.02-5.11-2.84-7.04Zm-7.01 15.2h-.01a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.18.83.85-3.1-.2-.32a8.14 8.14 0 0 1-1.25-4.35c0-4.51 3.67-8.18 8.19-8.18 2.18 0 4.24.84 5.78 2.4a8.11 8.11 0 0 1 2.39 5.79c0 4.51-3.68 8.19-8.1 8.19Zm4.49-6.13c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.17-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.08 3.6.57.25 1.02.4 1.37.52.57.18 1.09.16 1.5.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

const services = [
  {
    key: "physio",
    title: "Fisioterapia Avanzada",
    description:
      "Tratamiento personalizado para dolor, lesiones y recuperacion funcional con enfoque clinico y seguimiento real.",
    ctaLabel: "Reserva",
    whatsappHref: buildWhatsAppLink(
      WHATSAPP_PHONES.physio,
      "Hola, quiero reservar una cita de fisioterapia en Rehab Strength.",
    ),
  },
  {
    key: "training",
    title: "Entrenamiento Personalizado",
    description:
      "Programas de fuerza y movilidad adaptados a tu fase de recuperacion para volver a rendir con seguridad.",
    ctaLabel: "Reserva",
    whatsappHref: buildWhatsAppLink(
      WHATSAPP_PHONES.training,
      "Hola, quiero reservar una cita de entrenamiento personalizado en Rehab Strength.",
    ),
  },
  {
    key: "assessment",
    title: "Valoracion Integral",
    description:
      "Analisis biomecanico, historial y objetivos para crear un plan claro, medible y orientado a resultados.",
    ctaLabel: "Reserva",
    whatsappHref: buildWhatsAppLink(
      WHATSAPP_PHONES.physio,
      "Hola, quiero reservar una valoracion integral inicial en Rehab Strength.",
    ),
  },
];

const pillars = [
  "Diagnostico funcional y plan individual desde la primera sesion",
  "Combinacion de terapia manual, ejercicio terapeutico y fuerza aplicada",
  "Control del progreso con revisiones periodicas y objetivos concretos",
  "Coordinacion entre fisioterapeuta y entrenador para una recuperacion completa",
];

const team = [
  {
    name: "Dra. Sofia Ramirez",
    role: "Fisioterapia Musculoesqueletica",
    bio: "12 anos de experiencia en rehabilitacion de lesiones deportivas y dolor cronico.",
  },
  {
    name: "Carlos Mena",
    role: "Preparador Fisico",
    bio: "Especialista en fuerza aplicada a readaptacion y retorno al deporte sin recaidas.",
  },
  {
    name: "Irene Ortega",
    role: "Coordinacion Clinica",
    bio: "Disena protocolos de seguimiento para mejorar adherencia y resultados de cada paciente.",
  },
];

const testimonials = [
  {
    quote:
      "Pase de no poder correr por dolor lumbar a volver a entrenar 3 dias por semana sin molestias.",
    author: "Miguel A.",
  },
  {
    quote:
      "El trabajo conjunto entre fisioterapia y fuerza marco la diferencia. Trato cercano y muy profesional.",
    author: "Andrea L.",
  },
  {
    quote:
      "Desde la primera valoracion supe que habia metodo. Todo estaba medido y orientado a objetivos reales.",
    author: "Jorge P.",
  },
];

export const metadata: Metadata = {
  title: "Centro de Rehabilitacion y Rendimiento",
  description:
    "Rehab Strength: fisioterapia y entrenamiento personalizado para recuperarte con seguridad y volver mas fuerte.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Rehab Strength",
    medicalSpecialty: ["PhysicalTherapy", "SportsMedicine"],
    description:
      "Centro de rehabilitacion con sesiones de fisioterapia y entrenamiento fisico personalizado.",
    areaServed: "Espana",
    telephone: "+34 600 123 456",
    email: "info@rehab-strength.com",
  };

  return (
    <div className="site-shell">
      <header className="sticky top-0 z-40 border-b border-slate-300/80 bg-[#f5f7fb]/92 shadow-[0_8px_30px_rgba(5,18,35,0.08)] backdrop-blur-md">
        <nav
          className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3 lg:px-10"
          aria-label="Principal"
        >
          <a href="#inicio" className="group inline-flex items-center gap-3">
            <Logo className="logo-image" priority />
            <span className="font-display text-2xl tracking-wide text-slate-900">Rehab Strength</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
            <a className="nav-link" href="#servicios">
              Servicios
            </a>
            <a className="nav-link" href="#metodologia">
              Metodologia
            </a>
            <a className="nav-link" href="#equipo">
              Equipo
            </a>
            <a className="nav-link" href="#reserva">
              Reservas
            </a>
          </div>
          <a href="#reserva" className="btn-primary hidden md:inline-flex">
            Solicita cita
          </a>
        </nav>
      </header>

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
                <a href="#servicios" className="btn-ghost">
                  Ver servicios
                </a>
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
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                <a
                  href={service.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost mt-5 w-full gap-2"
                >
                  {service.ctaLabel}
                  <WhatsAppIcon />
                </a>
              </article>
            ))}
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
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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

        <section id="reserva" className="section-wrap pb-20">
          <div className="section-heading">
            <p className="eyebrow">Reserva por WhatsApp</p>
            <h2>Elige tu servicio y reserva de forma directa.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-[#07101b]/75 p-6 shadow-[0_0_60px_rgba(0,166,255,0.12)] md:p-8">
              <p className="eyebrow">Fisioterapia</p>
              <h3 className="font-display text-3xl text-white">Reserva cita de fisioterapia</h3>
              <p className="mt-4 text-slate-300">
                Escríbenos para dolor, lesion, recuperacion funcional o valoracion inicial.
              </p>
              <a
                href={buildWhatsAppLink(
                  WHATSAPP_PHONES.physio,
                  "Hola, quiero reservar una cita de fisioterapia en Rehab Strength.",
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 w-full gap-2 md:w-fit"
              >
                Reserva
                <WhatsAppIcon />
              </a>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#07101b]/75 p-6 shadow-[0_0_60px_rgba(0,166,255,0.12)] md:p-8">
              <p className="eyebrow">Entrenamiento</p>
              <h3 className="font-display text-3xl text-white">Reserva entrenamiento personalizado</h3>
              <p className="mt-4 text-slate-300">
                Contacta por WhatsApp para programas de fuerza, movilidad y readaptacion.
              </p>
              <a
                href={buildWhatsAppLink(
                  WHATSAPP_PHONES.training,
                  "Hola, quiero reservar una cita de entrenamiento personalizado en Rehab Strength.",
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 w-full gap-2 md:w-fit"
              >
                Reserva
                <WhatsAppIcon />
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#020409]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Rehab Strength. Recuperacion y rendimiento con criterio clinico.</p>
          <div className="flex gap-6">
            <a href="#" className="nav-link">
              Politica de privacidad
            </a>
            <a href="#" className="nav-link">
              Contacto
            </a>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
