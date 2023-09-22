import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, KeyLike } from 'jose'

export async function middleware(req: NextRequest) {
  if(req.cookies.has('token') && (await jwtVerify(req.cookies.get('token')!.value, new TextEncoder().encode(process.env.SECRET!)))) {
    if(req.nextUrl.pathname != '/admin/dashboard') {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url))
    }
  } else {
    // redirect to login
    console.log('redir')
    if(req.nextUrl.pathname != '/admin/login') {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  }
}

export const config = {
  matcher: '/admin/:path*'
}