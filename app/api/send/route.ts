import { Email } from '@/emails/newsletterEmail';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:NextRequest) {
  try {
    const email = req.headers.get('email')!
    const { data, error } = await resend.emails.send({
      from: 'services@renivet.com',
      to: [email],
      subject: 'Thank You for joining the Newsletter',
      react: Email(),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    console.log(email)
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
