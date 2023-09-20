import { NextRequest, NextResponse } from "next/server";
import { connectDb } from '@/lib/mongo/index'
import mongoose from "mongoose";
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function POST(req: NextRequest, res: NextResponse) {
  await connectDb();
  const { user, password } = await req.json()
  const response = NextResponse;
  mongoose.model('users').findOne({ user }).then(async(u: any) => {
    if(!u) {
      response.json({}, { status: 401 })
    } else {
      console.log(u)
      if((await compare(password, u.password))) {
        const token = jwt.sign({
          exp: Math.floor(Date.now() + (7 * 24 * 60 * 60))
        },
        process.env.SECRET!, // please define this in the env, very not secure
        {
          algorithm: 'none'
        })
        console.log(token)
        console.log(jwt.verify(token, process.env.SECRET!))
      }
      
    }
  })
  return response;
}