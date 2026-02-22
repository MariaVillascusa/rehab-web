function buildWhatsAppLink(phone: string, message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

const WHATSAPP_PHONES = {
  physio: "34600123456",
  training: "34600123457",
} as const;

export const physioWhatsAppHref = buildWhatsAppLink(
  WHATSAPP_PHONES.physio,
  "Hola, quiero reservar una cita de fisioterapia en Rehab Strength.",
);

export const trainingWhatsAppHref = buildWhatsAppLink(
  WHATSAPP_PHONES.training,
  "Hola, quiero reservar una cita de entrenamiento personalizado en Rehab Strength.",
);

export const services = [
  {
    key: "physio",
    title: "Fisioterapia Avanzada",
    description:
      "Tratamiento personalizado para dolor, lesiones y recuperacion funcional con enfoque clinico y seguimiento real.",
    ctaLabel: "Reserva",
    whatsappHref: physioWhatsAppHref,
  },
  {
    key: "training",
    title: "Entrenamiento Personalizado",
    description:
      "Programas de fuerza y movilidad adaptados a tu fase de recuperacion para volver a rendir con seguridad.",
    ctaLabel: "Reserva",
    whatsappHref: trainingWhatsAppHref,
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
] as const;

export const pillars = [
  "Diagnostico funcional y plan individual desde la primera sesion",
  "Combinacion de terapia manual, ejercicio terapeutico y fuerza aplicada",
  "Control del progreso con revisiones periodicas y objetivos concretos",
  "Coordinacion entre fisioterapeuta y entrenador para una recuperacion completa",
] as const;

export const team = [
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
] as const;

export const testimonials = [
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
] as const;

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Rehab Strength",
  medicalSpecialty: ["PhysicalTherapy", "SportsMedicine"],
  description:
    "Centro de rehabilitacion con sesiones de fisioterapia y entrenamiento fisico personalizado.",
  areaServed: "Espana",
  telephone: "+34 600 123 456",
  email: "info@rehab-strength.com",
} as const;
