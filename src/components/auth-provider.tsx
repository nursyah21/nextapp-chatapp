"use client"

import LoginPage from "@/app/login"
import { CreateAccount } from "./create-account"
// import { useSetUser } from "@/server/setUser"

export default function AuthProvider({ children, isAuthenticated }: { children: React.ReactNode, isAuthenticated: boolean }) {    
    
    // const {} = await useSetUser()

    if (!isAuthenticated) {
        return <LoginPage />
    }

    return <>
        {true ? <CreateAccount /> : children
        }
    </>
}