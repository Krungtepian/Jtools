'use server'

import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { connectDb } from '@/lib/mongo/index'
import mongoose from "mongoose";
import { compare } from 'bcryptjs'
import { SignJWT } from 'jose'

const exp = Math.floor(Date.now() + (7 * 24 * 60 * 60))
const secret = process.env.SECRET! // define this in .env

export default async function login(_:any, data: FormData) {
  await connectDb()
  const [user, password] = [data.get('user'), data.get('pw') as string]
  let response
  const u = await mongoose.model('users').findOne({ user })
  if(!u) {
    response = { message: 'invalid-u-pw' }
  } else {
    if(await (compare(password, u.password))) {
      console.log('correct')
      const token = await new SignJWT({}).setProtectedHeader({ alg: 'HS256' }).setExpirationTime(exp).sign(new TextEncoder().encode(secret))
      cookies().set('token', token, { secure: true, httpOnly: true })
      response = { message: 'success' }
      console.log(token)
      console.log('login success')
      redirect('/admin/')      
    } else {
      response = { message: 'invalid-u-pw' }
    }
  }
  return response
}