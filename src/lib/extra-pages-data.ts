import { physioWhatsAppHref, trainingWhatsAppHref } from "@/lib/home-page-data";

export const detailedServices = [
  {
    title: "Fisioterapia",
    subtitle: "Evaluacion, tratamiento y recuperacion funcional",
    description:
      "Sesiones enfocadas en dolor, lesion y recuperacion del movimiento con progresion clinica y seguimiento real.",
    bullets: [
      "Valoracion funcional individual",
      "Terapia manual y ejercicio terapeutico",
      "Plan de recuperacion con objetivos",
      "Seguimiento y ajuste segun evolucion",
    ],
    whatsappHref: physioWhatsAppHref,
  },
  {
    title: "Entrenamiento Fisico",
    subtitle: "Fuerza, movilidad y readaptacion",
    description:
      "Programas de entrenamiento adaptados a tu nivel y fase de recuperacion para volver a entrenar con seguridad.",
    bullets: [
      "Entrenamiento de fuerza guiado",
      "Movilidad y control motor",
      "Readaptacion al deporte",
      "Progresiones semanales",
    ],
    whatsappHref: trainingWhatsAppHref,
  },
] as const;

export const pricingBlocks = [
  {
    category: "Fisioterapia",
    items: [
      { name: "Sesion individual", price: "Consultar", note: "Duracion segun valoracion clinica" },
      { name: "Bono 4 sesiones", price: "Consultar", note: "Para seguimiento continuo" },
      { name: "Valoracion inicial", price: "Consultar", note: "Primera visita con plan de accion" },
    ],
    whatsappHref: physioWhatsAppHref,
  },
  {
    category: "Entrenamiento Fisico",
    items: [
      { name: "Sesion individual", price: "Consultar", note: "Entrenamiento guiado" },
      { name: "Bono mensual", price: "Consultar", note: "Plan y seguimiento semanal" },
      { name: "Programa de readaptacion", price: "Consultar", note: "Segun objetivos y frecuencia" },
    ],
    whatsappHref: trainingWhatsAppHref,
  },
] as const;

export const trainingSchedule = [
  {
    day: "Lunes",
    slots: ["07:00 - 08:00", "14:00 - 15:00", "19:00 - 20:00"],
  },
  {
    day: "Martes",
    slots: ["08:00 - 09:00", "15:00 - 16:00", "20:00 - 21:00"],
  },
  {
    day: "Miercoles",
    slots: ["07:00 - 08:00", "14:00 - 15:00", "19:00 - 20:00"],
  },
  {
    day: "Jueves",
    slots: ["08:00 - 09:00", "15:00 - 16:00", "20:00 - 21:00"],
  },
  {
    day: "Viernes",
    slots: ["07:00 - 08:00", "13:00 - 14:00", "18:00 - 19:00"],
  },
] as const;

export const scheduleNotes = [
  "Plazas sujetas a disponibilidad y nivel del grupo.",
  "Posibilidad de horarios individuales bajo consulta.",
  "Confirmacion final por WhatsApp tras contacto.",
] as const;
