"use client";

import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Link from "next/link";
import { useParams } from "next/navigation";

const chats = [
    {
        id: "1",
        name: "Alice Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        lastMessage: "Hey, how are you doing?",
        time: "10:30 AM",
        unread: 2,
    },
    {
        id: "2",
        name: "Bob Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        lastMessage: "Can we meet tomorrow?",
        time: "Yesterday",
        unread: 0,
    },
    {
        id: "3",
        name: "Carol Williams",
        avatar: "/placeholder.svg?height=40&width=40",
        lastMessage: "I've sent you the files",
        time: "Yesterday",
        unread: 0,
    },
    {
        id: "4",
        name: "Dave Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        lastMessage: "Thanks for your help!",
        time: "Monday",
        unread: 0,
    },
    {
        id: "5",
        name: "Eve Davis",
        avatar: "/placeholder.svg?height=40&width=40",
        lastMessage: "Let's catch up soon",
        time: "Sunday",
        unread: 0,
    },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const params = useParams()
    const isMobile = useIsMobile()

    return (
        
        <div className="flex h-screen w-full flex-col md:flex-row">
            <div className={cn(params?.id && isMobile ? "hidden" : "flex", "h-full w-full flex-col border-r md:w-80")}>
                <div className="border-b p-4 space-y-2">
                    <h1 className="font-semibold text-lg">Chat</h1>
                    <Input placeholder="Search chats..." className="w-full" />
                </div>
                <ScrollArea className="flex-1">
                    <div className="space-y-1 p-2">
                        {chats.map((chat, idx) => (
                            <Link href={`/chat/${idx + 1}`} key={chat.id} className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted cursor-pointer">
                                <Avatar>
                                    <AvatarImage src={chat.avatar} alt={chat.name} />
                                    <AvatarFallback>
                                        {chat.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium">{chat.name}</h3>
                                        <span className="text-xs text-muted-foreground">{chat.time}</span>
                                    </div>
                                    <p className="truncate text-sm text-muted-foreground">{chat.lastMessage}</p>
                                </div>
                                {chat.unread > 0 && (
                                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                                        {chat.unread}
                                    </div>
                                )}
                            </Link>
                        ))}
                    </div>
                </ScrollArea>
            </div>
            <div className="block flex-1">
            {children}
            </div>
        </div>
    );
}