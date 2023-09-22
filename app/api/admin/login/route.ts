import { NextRequest, NextResponse } from "next/server";
import { connectDb } from '@/lib/mongo/index'
import mongoose from "mongoose";
import { compare } from 'bcryptjs'
import { SignJWT } from 'jose'

const exp = Math.floor(Date.now() + (7 * 24 * 60 * 60))
const secret = process.env.SECRET! // define this in .env.local

export async function POST(req: NextRequest) {
  await connectDb()
  const { user, password } = await req.json()
  let response: NextResponse
  const u = await mongoose.model('users').findOne({ user })
  if(!u) {
    response = new NextResponse(null, { status: 401 })
  } else {
    if((await compare(password, u.password))) {
      console.log('correct')
      const token = await new SignJWT({}).setProtectedHeader({ alg: 'HS256' }).setExpirationTime(exp).sign(new TextEncoder().encode(secret))
      response = NextResponse.redirect(new URL('/admin/dashboard', req.url))
      response.cookies.set('token', token, { secure: true, httpOnly: true })
      console.log(token)
    } else {
      response = new NextResponse(null, { status: 401 })
    }
  }
  return response!
}