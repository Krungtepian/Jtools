import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log(req.cookies)
  if(req.cookies.get('token')) { // check if token exists
    // if it does, check if it's valid, if so redirect to dashboard, or no need if the user is already there
  } else {
    // redirect to login
    if(req.nextUrl.pathname != '/admin/login') {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  }
}

export const config = {
  matcher: '/admin/:path*'
}