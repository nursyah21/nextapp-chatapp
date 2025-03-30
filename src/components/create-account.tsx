"use client"

import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export const CreateAccount = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <Card className="w-96">
                <CardHeader>
                    <CardTitle>Create Account</CardTitle>
                    <CardDescription>create account for you chat app</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4" action="">
                        <div className="space-y-2">
                            <Label>Username</Label>
                            <Input placeholder="username" required />
                        </div>
                        <div className="space-y-2">
                            <Label>Name</Label>
                            <Input placeholder="name" required />
                        </div>
                        <Button variant={'outline'} type="submit" className="w-full">Submit</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}