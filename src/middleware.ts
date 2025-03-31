import { eq } from 'drizzle-orm';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { db } from './database';
import { users } from './database/schema';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
  const userid = request.headers.get('userid');
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;
  const method = request.method;
  const cachedProfile = request.cookies.get(`profile_${userid}`)


  if (pathname === '/') {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    const cookieStore = await cookies();
    cookieStore.set("userid", user.id, { path: "/", httpOnly: true });
  }

  if (!userid) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }
  response.headers.set('userid', userid);
  console.log('hai', userid)

  if (pathname === '/api/profile' && method === 'POST') {
    console.log('test', userid)
    return NextResponse.next();
  }


  if (cachedProfile) {
    return NextResponse.next()
  }

  const profile = await db.query.users.findFirst({
    where: eq(users.id, userid),
  });;

  if (!profile) {
    return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
  }

  response.cookies.set(`profile_${userid}`, JSON.stringify(profile), { httpOnly: true, secure: true, maxAge: 60 * 60 })

  return response;
}

// Apply middleware to specific routes
export const config = {
  matcher: ['/api/profile/:path*', '/'],
};