import { NextResponse } from 'next/server';
import { Resend } from 'resend';


const resend = new Resend('re_HgZvoZUS_3nztpLg5aWpqKZoEUfWew9Ag');
const fromEmail = 'onboarding@resend.dev'

export async function POST() {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['ciro.moscarella@icloud.com', email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Grazie per avermi contattato</p>
          <p>Mi hai scritto:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
