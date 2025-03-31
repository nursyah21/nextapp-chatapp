"use server"

import { cookies } from "next/headers";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export async function useSetUser() {
    const { isAuthenticated: authenticated, getUser } = getKindeServerSession()
    const isAuthenticated = await authenticated()
    const cookieStore = await cookies();
    const user = await getUser()

    cookieStore.set("userid", user.id, { path: "/", httpOnly: true });

    return { isAuthenticated }
}