import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '../types_db'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const headers = req.headers
  const accessToken = headers.get("access_token") as string
  const refreshToken = headers.get("refresh_token") as string
  if (req.nextUrl.pathname.startsWith("/api")) {
    req.headers.append("Access-Control-Allow-Origin", "*")
  }
  const supabase = createMiddlewareClient<Database>({ req, res })
  await supabase.auth.setSession({
    access_token: accessToken,
    refresh_token: refreshToken,
  })
  console.log("middleware", accessToken, refreshToken)
  const sess = await supabase.auth.getSession()
  return res
}