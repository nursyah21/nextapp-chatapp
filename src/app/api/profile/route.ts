import { NextResponse } from 'next/server';
import { db } from '@/database';
import { eq } from 'drizzle-orm';
import { users, UsersSelectType } from '@/database/schema';
import { cookies } from 'next/headers';


export async function GET(request: Request) {
    const userid = request.headers.get('userid')!;
    const profileData = JSON.parse((await cookies()).get(`profile_${userid}`)!.value)   

    return NextResponse.json({profile: profileData});
}

// Create profile
export async function POST(request: Request) {
    const profileData = await request.json() as UsersSelectType;
    // const userid = request.headers.get('userid')!;
    
    const newProfile = await db.insert(users).values({ ...profileData });
    return NextResponse.json(newProfile, { status: 201 });
}

// Edit profile
export async function PUT(request: Request) {
    const userid = request.headers.get('userid')!;
    const profileData = JSON.parse((await cookies()).get(`profile_${userid}`)!.value)
    
    const updatedProfile = await db.update(users).set(profileData).where(eq(users.id, userid));
    return NextResponse.json({ message: 'Profile updated', updatedProfile });
}