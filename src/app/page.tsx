"use client"
import { AppLayout } from '@/components/app-layout';
import { redirect } from 'next/navigation';

export default function Home({ children }: { children: React.ReactNode }) {  
  redirect('/chat')
  
  return (
    <AppLayout>
        {children}
    </AppLayout>
  );
}