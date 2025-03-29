"use client"


import { GoogleIcon } from "@/components/icons/google"
import { buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs'
import { Mail } from "lucide-react"
import { useState } from "react"

const useEmail = () => {
    const [email, setEmail] = useState('')

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)

    return { email, handleEmailChange }
}

export default function LoginPage() {
    const { email, handleEmailChange } = useEmail()

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4">
            <div className="w-full max-w-md space-y-8 bg-black border border-gray-800 rounded-xl p-8">

                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-white">Chat App</h1>
                    <p className="text-gray-400">Send your message</p>
                </div>

                <div className="space-y-6">
                    <LoginLink
                        authUrlParams={{ connection_id: process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "" }}
                        className={buttonVariants({ variant: "outline", className: "w-full" })}>
                        <GoogleIcon className="mr-2 h-4 w-4" />
                        Continue with Google
                    </LoginLink>

                    <div className="flex items-center gap-2">
                        <Separator className="flex-1 bg-gray-700" />
                        <span className="text-sm text-gray-400">OR</span>
                        <Separator className="flex-1 bg-gray-700" />
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-300">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className="bg-gray-900 border-gray-700 text-white"
                            />
                        </div>
                        <LoginLink
                            type="submit"
                            authUrlParams={{
                                connection_id: process.env.NEXT_PUBLIC_KINDE_CONNECTION_EMAIL_PASSWORDLESS || "",
                                login_hint: email
                            }}
                            className={buttonVariants({ variant: "outline", className: "w-full" })}>
                            <Mail className="mr-2 h-4 w-4" />
                            Continue with Email
                        </LoginLink>
                    </div>


                </div>
            </div>
        </div>
    )
}

