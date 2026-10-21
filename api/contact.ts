/**
 * Vercel serverless function: POST /api/contact
 * Sends the contact-form message to your inbox through Resend.
 *
 * Required env vars (set in Vercel project settings, never in code):
 *   RESEND_API_KEY    – from https://resend.com/api-keys
 *   CONTACT_TO_EMAIL  – inbox that receives the messages
 * Optional:
 *   RESEND_FROM       – defaults to "Portfolio Contact <onboarding@resend.dev>"
 */

type Req = { method?: string; body?: unknown };
type Res = {
  status(code: number): Res;
  setHeader(name: string, value: string): Res;
  json(body: unknown): void;
};

const LIMITS = { name: 100, email: 254, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const clean = (v: unknown) => (typeof v === 'string' ? v.trim() : '');

export default async function handler(req: Req, res: Res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Body is parsed by Vercel when Content-Type is application/json.
  let body: Record<string, unknown> = {};
  if (typeof req.body === 'string') {
    try {
      body = JSON.parse(req.body);
    } catch {
      return res.status(400).json({ error: 'Invalid request body.' });
    }
  } else if (req.body && typeof req.body === 'object') {
    body = req.body as Record<string, unknown>;
  }

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (clean(body.website)) {
    return res.status(200).json({ ok: true });
  }

  // Strip line breaks from single-line fields (prevents header injection).
  const name = clean(body.name).replace(/[\r\n]+/g, ' ');
  const email = clean(body.email).replace(/[\r\n]+/g, '');
  const message = clean(body.message);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in your name, email and message.' });
  }
  if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
    return res.status(400).json({ error: 'One of the fields is too long.' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM || 'Portfolio Contact <onboarding@resend.dev>';

  if (!apiKey || !to) {
    console.error('Contact form misconfigured: RESEND_API_KEY and/or CONTACT_TO_EMAIL is not set.');
    return res.status(500).json({ error: 'The contact form is not configured yet.' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email, // hitting "Reply" in your inbox answers the visitor
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#111">
            <h2 style="margin:0 0 12px">New portfolio message</h2>
            <p style="margin:0"><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p style="margin:0 0 16px"><strong>Email:</strong> ${escapeHtml(email)}</p>
            <div style="padding:12px 16px;background:#f3f4f6;border-radius:8px;white-space:pre-wrap">${escapeHtml(message)}</div>
          </div>`,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error('Resend error', response.status, details);
      return res.status(502).json({ error: 'Could not send your message. Please try again later.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend request failed', err);
    return res.status(502).json({ error: 'Could not send your message. Please try again later.' });
  }
}
