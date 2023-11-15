'use server'

import { sendMail } from '@/lib/mail'
import { validate } from "email-validator";

export async function sendEmail(_: any, { name, email, message }: any) {
  'use server';
  console.log('send email')
  console.log(name, email, message)
  if((!name || !email || !message) || !validate(email as string)) {
    return { message: 'form-error' }
  }
  await sendMail(name, email, message);
  // return new NextResponse(null, { status: 200 })
  return { message: 'sent' }
}