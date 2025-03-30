import { SidebarProvider } from "@/components/ui/sidebar";
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
    <div className="flex flex-col w-16 h-screen p-4 border-r">
        <div className="flex flex-1 flex-col justify-center">
            {items.map((item, idx) => (
                <Link className="p-2" key={idx} href={item.url}>
                    <item.icon
                        className={`h-5 w-5 ${pathname.startsWith(item.url) ? "opacity-100" : "opacity-50"
                            }`}
                    />
                </Link>
            ))}
        </div>
        <LogoutLink className="p-2">
            <LogOut className="h-5 w-5 opacity-50" />
            <span className="sr-only">Logout</span>
        </LogoutLink>
    </div>
);

const BottomBar = ({ pathname }: { pathname: string }) => (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t bg-background px-2">
        {items.map((item, idx) => (
            <Link key={idx} href={item.url}>
                <item.icon
                    className={`h-5 w-5 ${pathname.startsWith(item.url) ? "opacity-100" : "opacity-50"
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
            {isMobile ? <BottomBar pathname={pathname} /> :
                <AppSidebar pathname={pathname} />}
            {children}
        </SidebarProvider>
    );
}
