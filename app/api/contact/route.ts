import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "ivanandradeuxui@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Campos incompletos" }, { status: 400 });
    }

    const result = await resend.emails.send({
      from: "Portfolio de Iván <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — Portfolio`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    console.log("[contact] Resend result:", JSON.stringify(result));

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "Error al enviar" }, { status: 500 });
  }
}
