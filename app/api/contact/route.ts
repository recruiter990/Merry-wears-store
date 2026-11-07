import { NextResponse } from "next/server";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = String(body?.name || "").trim();
  const email = String(body?.email || "").trim();
  const topic = String(body?.topic || "").trim();
  const message = String(body?.message || "").trim();

  if (!name || !isEmail(email) || message.length < 8) {
    return NextResponse.json(
      { error: "Please include your name, a valid email and a message." },
      { status: 400 },
    );
  }

  const payload = { name, email, topic, message, receivedAt: new Date().toISOString() };
  const to = process.env.CONTACT_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey && to) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Merry wears. <onboarding@resend.dev>`,
        to: [to],
        reply_to: email,
        subject: `Contact: ${topic || "Message"} from ${name}`,
        text: `${message}\n\nFrom: ${name} <${email}>`,
      }),
    });
    if (!response.ok) {
      return NextResponse.json(
        { error: "The mail provider rejected the message. Try again later." },
        { status: 502 },
      );
    }
    return NextResponse.json({
      message: "Thank you. Your message has been sent.",
    });
  }

  console.info("Contact form submission (email delivery not configured)", payload);
  return NextResponse.json({
    message:
      "Thank you. Your message was received by the site. Email delivery will complete once CONTACT_EMAIL and RESEND_API_KEY are configured.",
  });
}
