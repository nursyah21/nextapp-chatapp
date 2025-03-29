import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import { LogOut, MessageSquare, User, Users } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

const items = [
    {
        url: '/chat',
        icon: MessageSquare
    },
    {
        url: '/contact',
        icon: User
    },
    {
        url: '/group',
        icon: Users
    },
];

const AppSidebar = ({ pathname }: { pathname: string }) => (
    <Sidebar variant="inset" className="w-16 border-r">
        <SidebarContent className="flex flex-col items-center justify-center gap-4 py-4">
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item, idx) => (
                            <SidebarMenuItem key={idx}>
                                <SidebarMenuButton asChild>
                                    <Link href={item.url}>
                                        <item.icon
                                            className={`h-5 w-5 ${pathname === item.url ? "opacity-100" : "opacity-50"
                                                }`}
                                        />
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="pb-4">
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <LogoutLink>
                            <LogOut className="h-5 w-5 opacity-50" />
                            <span className="sr-only">Logout</span>
                        </LogoutLink>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
);

const BottomBar = ({ pathname }: { pathname: string }) => (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background px-2">
        {items.map((item, idx) => (
            <Link key={idx} href={item.url}>
                <item.icon
                    className={`h-5 w-5 ${pathname === item.url ? "opacity-100" : "opacity-50"
                        }`}
                />
            </Link>
        ))}
        <LogoutLink>
            <LogOut className="h-5 w-5 opacity-50" />
            <span className="sr-only">Logout</span>
        </LogoutLink>
    </div>
);

export function AppLayout({ children }: { children: React.ReactNode }) {
    const isMobile = useIsMobile();
    const pathname = usePathname();

    return (
        <SidebarProvider>
            {isMobile ? <BottomBar pathname={pathname} /> : <AppSidebar pathname={pathname} />}
            {children}
        </SidebarProvider>
    );
}
