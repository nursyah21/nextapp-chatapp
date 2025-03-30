"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const contacts = [
    {
        id: "1",
        name: "Alice Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        email: "alice@example.com",
    },
    {
        id: "2",
        name: "Bob Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        email: "bob@example.com",
    },
    {
        id: "3",
        name: "Carol Williams",
        avatar: "/placeholder.svg?height=40&width=40",
        email: "carol@example.com",
    },
    {
        id: "4",
        name: "Dave Brown",
        avatar: "/placeholder.svg?height=40&width=40",
        email: "dave@example.com",
    },
    {
        id: "5",
        name: "Eve Davis",
        avatar: "/placeholder.svg?height=40&width=40",
        email: "eve@example.com",
    },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
     const params = useParams()
        const isMobile = useIsMobile()
    
        return (
            <div className="flex flex-1 h-screen w-full flex-col md:flex-row">
                <div className={cn(params?.id && isMobile ? "hidden" : "flex", "h-full w-full flex-col border-r md:w-80 ")}>
                <div className="border-b p-4 space-y-2">
                    <h1 className="font-semibold text-lg">Contact</h1>
                    <div className="flex gap-x-4">
                        <Input placeholder="Search contacts..." className="w-full" />
                        <Button variant={"outline"}><Plus /></Button>
                    </div>

                </div>
                <ScrollArea className="flex-1">
                    <div className="space-y-1 p-2">
                        {contacts.map((contact, idx) => (
                            <Link href={`/contact/${idx + 1}`} key={contact.id} className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted cursor-pointer">
                                <Avatar>
                                    <AvatarImage src={contact.avatar} alt={contact.name} />
                                    <AvatarFallback>
                                        {contact.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 overflow-hidden">
                                    <h3 className="font-medium">{contact.name}</h3>
                                    <p className="truncate text-sm text-muted-foreground">{contact.email}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </ScrollArea>
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}