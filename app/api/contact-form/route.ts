import { NextRequest, NextResponse } from "next/server";
import { sendMail } from '@/lib/mail'
import { validate } from "email-validator";

export async function POST(req: NextRequest) {
  console.log('send email')
  const { name, email, message} = await req.json();
  console.log(name, email, message)
  if((!name || !email || !message) || !validate(email)) {
    return new NextResponse(null, { status: 400 })
  }
  await sendMail(name, email, message);
  return new NextResponse(null, { status: 200 })
}