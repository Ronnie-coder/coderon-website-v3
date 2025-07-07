// src/app/api/send/route.ts
import { Resend } from 'resend';
import ContactEmail from '@/components/emails/ContactEmail';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Coderon Website <onboarding@resend.dev>', // Required by Resend's free tier
      to: ['coderonc@gmail.com'], // YOUR email address here
      subject: `New Inquiry: ${service} for ${name}`,
      reply_to: email, // This allows you to just hit "Reply" to contact the client
      react: ContactEmail({ name, email, service, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}