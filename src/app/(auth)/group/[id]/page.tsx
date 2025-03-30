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
                    <h2 className="text-lg font-semibold">Project Alpha {params?.id}</h2>
                    <p className="text-sm text-muted-foreground">5 members</p>
                </div>
            </div>
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                    <div className="flex items-end gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alice Johnson" />
                            <AvatarFallback>AJ</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-medium">Alice Johnson</span>
                            <div className="rounded-lg bg-muted p-3">
                                <p>Meeting at 3 PM today. Dont forget to bring your reports.</p>
                            </div>
                        </div>
                        <span className="text-xs text-muted-foreground">11:45 AM</span>
                    </div>
                    <div className="flex items-end justify-end gap-2">
                        <span className="text-xs text-muted-foreground">11:47 AM</span>
                        <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                            <p>Ill be there. Thanks for the reminder!</p>
                        </div>
                    </div>
                    <div className="flex items-end gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Bob Smith" />
                            <AvatarFallback>BS</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-medium">Bob Smith</span>
                            <div className="rounded-lg bg-muted p-3">
                                <p>Can we also discuss the new project timeline?</p>
                            </div>
                        </div>
                        <span className="text-xs text-muted-foreground">11:50 AM</span>
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