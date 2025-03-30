"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Send } from "lucide-react"
import { useParams } from "next/navigation"

export default function Page() {
    const params = useParams()

    return (
        <div className="flex flex-1 flex-col h-full">
            <div className="flex items-center gap-4 border-b p-4">
                <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Alice Johnson" />
                    <AvatarFallback>{params?.id}</AvatarFallback>
                </Avatar>
                <div>
                    <h2 className="text-lg font-semibold">Alice Johnson</h2>
                    <p className="text-sm text-muted-foreground">Online</p>
                </div>
            </div>
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                    <div className="flex items-end gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alice Johnson" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div className="rounded-lg bg-muted p-3">
                            <p>Hey, how are you doing?</p>
                        </div>
                        <span className="text-xs text-muted-foreground">10:30 AM</span>
                    </div>
                    <div className="flex items-end justify-end gap-2">
                        <span className="text-xs text-muted-foreground">10:32 AM</span>
                        <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                            <p>Im good, thanks! How about you?</p>
                        </div>
                    </div>
                    <div className="flex items-end gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alice Johnson" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div className="rounded-lg bg-muted p-3">
                            <p>Im doing well. Do you want to meet up later?</p>
                        </div>
                        <span className="text-xs text-muted-foreground">10:35 AM</span>
                    </div>
                </div>
            </ScrollArea>
            <div className="border-t p-4">
                <div className="flex items-center gap-2">
                    <Input placeholder="Type a message..." className="flex-1" />
                    <Button size="icon">
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Send</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}