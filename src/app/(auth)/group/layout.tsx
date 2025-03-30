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

const groups = [
    {
        id: "1",
        name: "Project Alpha",
        avatar: "/placeholder.svg?height=40&width=40",
        members: 5,
        lastMessage: "Meeting at 3 PM",
        time: "11:45 AM",
        unread: 3,
    },
    {
        id: "2",
        name: "Family",
        avatar: "/placeholder.svg?height=40&width=40",
        members: 8,
        lastMessage: "Dinner on Sunday?",
        time: "Yesterday",
        unread: 0,
    },
    {
        id: "3",
        name: "Gaming Squad",
        avatar: "/placeholder.svg?height=40&width=40",
        members: 4,
        lastMessage: "Let's play tonight",
        time: "Yesterday",
        unread: 0,
    },
    {
        id: "4",
        name: "Book Club",
        avatar: "/placeholder.svg?height=40&width=40",
        members: 12,
        lastMessage: "New book recommendation",
        time: "Monday",
        unread: 0,
    },
    {
        id: "5",
        name: "Travel Buddies asd adsa",
        avatar: "/placeholder.svg?height=40&width=40",
        members: 6,
        lastMessage: "Trip planning for summer",
        time: "Sunday",
        unread: 0,
    },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const params = useParams()
    const isMobile = useIsMobile()

    return (
        <div className="flex flex-1 h-screen w-full flex-col md:flex-row">
            <div className={cn(params?.id && isMobile ? "hidden" : "flex", "h-full w-full flex-col border-r md:w-80 ")}>
                <div className="border-b p-4 space-y-2">
                    <h1 className="font-semibold text-lg">Group</h1>
                    <div className="flex gap-x-4">
                        <Input placeholder="Search group..." className="w-full" />
                        <Button variant={"outline"}><Plus /></Button>
                    </div>

                </div>
                <ScrollArea className="flex-1">
                    <div className="space-y-1 p-2">
                        {groups.map((group, idx) => (
                            <Link href={`/group/${idx + 1}`} key={group.id} className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted cursor-pointer">
                                <Avatar>
                                    <AvatarImage src={group.avatar} alt={group.name} />
                                    <AvatarFallback className="w-12">
                                        {group.name
                                            .split(" ")
                                            .slice(0, 2)
                                            .map((n) => n[0])
                                            .join("")
                                            .padEnd(2, "_")}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium">{group.name}</h3>
                                        <span className="text-xs text-muted-foreground">{group.time}</span>
                                    </div>
                                    <p className="truncate text-sm text-muted-foreground">{group.lastMessage}</p>
                                </div>
                                {group.unread > 0 && (
                                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                                        {group.unread}
                                    </div>
                                )}
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