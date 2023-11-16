
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend('re_HgZvoZUS_3nztpLg5aWpqKZoEUfWew9Ag');
const fromEmail = 'onboarding@resend.dev'

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("body", body)
  const { email, subject, message } = body;
  console.log(email, subject, message);
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

    if(data.status === 'success') {
      return NextResponse.json({message: 'Email Mandata Correttamente'});
    }
    return NextResponse.json(data)
  } catch (error) {
    console.log('error' ,  error );
  }
}
