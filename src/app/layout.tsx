import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoginPage from "./login";
import { CreateAccount } from "@/components/create-account";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chat app",
  description: "Chat app with nextjs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated: authenticated } = getKindeServerSession();
  const isAuthenticated = await authenticated()
  

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {!isAuthenticated ? (
            <>
              <LoginPage />
            </>
          ) : true ? <CreateAccount /> : children
          }
        </ThemeProvider>
        <Toaster closeButton position="top-right" />
      </body>
    </html>
  );
}
