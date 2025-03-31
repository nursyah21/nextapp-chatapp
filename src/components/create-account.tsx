"use client"

import { KindeBrowserClient } from "@/app/types"
import { UsersSelectType } from "@/database/schema"
import { uploadFiles } from "@/server/uploadthing"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { ChangeEvent, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Skeleton } from "./ui/skeleton"


const useSubmit = () => {
    const { register, handleSubmit } = useForm<UsersSelectType>()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (data: UsersSelectType) => {
        setIsSubmitting(true)
        const result = await fetch('/api/profile', {method:'post', body: JSON.stringify(data)})
        console.log(result)
        setIsSubmitting(false)
    }

    return {
        register, handleSubmit, onSubmit, isSubmitting
    }
}

const useUpload = () => {
    const imageRef = useRef<HTMLInputElement | null>(null)
    const [isUploading, setIsUploading] = useState(false)
    const [avatarUrl, setAvatarUrl] = useState<string|undefined>()
    const upload = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return;
        if (file.size > 1*1024*1024) return toast.error("max size 1mb");
        setIsUploading(true)
        const res = await uploadFiles(file)
        setIsUploading(false)
        setAvatarUrl(res.data?.ufsUrl)
    }
    return {imageRef, upload, isUploading, avatarUrl}
}


export const CreateAccount = () => {
    const { user, isLoading } = useKindeBrowserClient() as KindeBrowserClient
    const { register, onSubmit, isSubmitting, handleSubmit } = useSubmit()
    const {imageRef, upload, isUploading, avatarUrl} = useUpload()

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <Card className="w-96">
                <CardHeader>
                    <CardTitle>Create Account</CardTitle>
                    <CardDescription>create account for you chat app</CardDescription>
                </CardHeader>
                <CardContent>
                    {isLoading ? <Skeleton className="w-48 h-4" /> :
                        <>
                            <div className="flex justify-center flex-col space-y-4 items-center">
                                <Avatar className="w-12 h-12">
                                    <AvatarImage src={avatarUrl ? avatarUrl : user?.picture} />
                                </Avatar>
                                <input className="hidden" type="file" accept="image/*" ref={imageRef} onChange={upload} />
                                <Button disabled={isUploading} variant={"outline"} onClick={()=>imageRef.current?.click()} >Change Picture</Button>
                            </div>

                            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                                <input type="hidden" value={user?.id}  {...register('authId')}/>
                                <input type="hidden" value={avatarUrl ? avatarUrl : user?.picture} {...register('avatarUrl')} />
                                <div className="space-y-2">
                                    <Label>Username</Label>
                                    <Input placeholder="username" required defaultValue={user?.given_name} {...register('username')} />
                                </div>
                                <div className="space-y-2">
                                    <Label>Name</Label>
                                    <Input placeholder="name" required defaultValue={user?.given_name} {...register('name')} />
                                </div>
                                <Button disabled={isSubmitting || isUploading} variant={'outline'} type="submit" className="w-full">Create Account</Button>
                            </form>
                        </>
                    }
                </CardContent>
            </Card>
        </div>
    )
}