import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Naam, e-mail en bericht zijn verplicht' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailBody = `
Nieuw contactverzoek via Werkplaats 5 website

Naam: ${name}
E-mail: ${email}
Telefoon: ${phone || 'Niet opgegeven'}

Bericht:
${message}

---
Dit bericht is verzonden via het contactformulier op werkplaats5.nl
    `.trim();

    await transporter.sendMail({
      from: 'info@bluezebra.works',
      to: 'erp@bluezebra.works',
      replyTo: email,
      subject: `Werkplaats 5 - Nieuw contact: ${name}`,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111111; border-bottom: 2px solid #3A7BFF; padding-bottom: 10px;">
            Nieuw contactverzoek via Werkplaats 5
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Naam:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">E-mail:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${email}" style="color: #3A7BFF;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Telefoon:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone || 'Niet opgegeven'}</td>
            </tr>
          </table>
          <div style="background: #F4F3EF; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #111111; margin-top: 0;">Bericht:</h3>
            <p style="color: #2E2E2E; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #BDBDB8; font-size: 12px; margin-top: 30px;">
            Dit bericht is verzonden via het contactformulier op werkplaats5.nl
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Bericht verzonden!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Er ging iets mis. Probeer het later opnieuw.' },
      { status: 500 }
    );
  }
}
