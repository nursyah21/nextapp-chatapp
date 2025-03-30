"use client"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { MessageSquare, Phone, Video } from "lucide-react"
import { useParams } from "next/navigation"

export default function Page() {
    const params = useParams()

    return (
        <div className="flex flex-1 flex-col h-full items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4 p-4 max-w-md">
                    <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Alice Johnson" />
                        <AvatarFallback>{params?.id}</AvatarFallback>
                    </Avatar>
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Alice Johnson</h2>
                    <p className="text-muted-foreground">alice@example.com</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                <div className="flex gap-2 mt-4">
                    <Button size="icon" variant="outline">
                        <MessageSquare className="h-5 w-5" />
                        <span className="sr-only">Message</span>
                    </Button>
                    <Button size="icon" variant="outline">
                        <Phone className="h-5 w-5" />
                        <span className="sr-only">Call</span>
                    </Button>
                    <Button size="icon" variant="outline">
                        <Video className="h-5 w-5" />
                        <span className="sr-only">Video Call</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}