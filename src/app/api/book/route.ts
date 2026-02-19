import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(6).max(30),
  email: z.email(),
  service: z.enum(["fisioterapia", "entrenamiento", "valoracion"]),
  message: z.string().trim().min(10).max(1200),
  consent: z.literal("accepted"),
});

export async function POST(request: Request) {
  const parsed = bookingSchema.safeParse(await request.json());

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Revisa los datos del formulario e intentalo de nuevo." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.BOOKING_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      {
        message:
          "Falta configurar RESEND_API_KEY, BOOKING_TO_EMAIL o RESEND_FROM_EMAIL en el servidor.",
      },
      { status: 500 },
    );
  }

  const { name, phone, email, service, message } = parsed.data;
  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Nueva reserva Rehab Strength: ${name}`,
      replyTo: email,
      html: `
        <h2>Nueva solicitud de cita</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Telefono:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ message: "Solicitud enviada correctamente." });
  } catch {
    return NextResponse.json(
      { message: "No hemos podido enviar tu solicitud. Intentalo de nuevo." },
      { status: 502 },
    );
  }
}
