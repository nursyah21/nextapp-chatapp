"use client";
import { AppLayout } from "@/components/app-layout";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Home({ children }: { children: React.ReactNode }) {
    const { isLoading } = useKindeBrowserClient()

    if (isLoading) {
        return <>
            <div className="flex h-screen w-full items-center justify-center">
                <div className="text-center">
                    <h1 className="font-semibold text-lg">Chat App</h1>
                    <span className="text-slate-500">send your message</span>
                </div>
            </div>
        </>
    }

    return (
        <AppLayout>
            <div className="w-full max-w-7xl">
                {children}
            </div>
        </AppLayout>
    );
}