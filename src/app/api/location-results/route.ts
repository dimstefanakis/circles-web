import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse, NextRequest } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'
import { cookies } from 'next/headers'
const sdk = require('api')('@fsq-developer/v1.0#18rps1flohmmndw');

import { Database } from '../../../../types_db'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest, res: NextResponse) {
  // const supabase = createRouteHandlerClient<Database>({ cookies })
  const { query, location } = await req.json()
  const supabase = createRouteHandlerClient<Database>({ cookies })

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ success: false })
  }

  try {
    sdk.auth(process.env.FSQ_API_KEY);
    const response = await sdk.autocomplete({
      query: query, ll: location
    })
    console.log(response, 'response', query, location, 'query, location')
    return NextResponse.json(response.data)
  } catch (e) {
    console.log(e, 'erropr', query, location, 'query, location')
    return NextResponse.json({ success: false, error: e })
  }
}