import { NextResponse } from "next/server";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = String(body?.email || "").trim();
  const name = String(body?.name || "").trim();

  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, source: "merry-wears-newsletter" }),
    });
    if (!response.ok) {
      return NextResponse.json({ error: "The list provider could not add you." }, { status: 502 });
    }
    return NextResponse.json({ message: "You are on the list. Look for a confirmation if your provider sends one." });
  }

  console.info("Newsletter signup (webhook not configured)", { email, name });
  return NextResponse.json({
    message:
      "You are recorded. Connect NEWSLETTER_WEBHOOK_URL (Mailchimp, Buttondown, Loops or similar) to send this to your list.",
  });
}
