"use client"
import { AppLayout } from '@/components/app-layout';
// import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

// type KindeBrowserClient = {
//   user: {email:string, given_name: string},
//   isLoading: boolean
// }

export default function Home({children}:{children: React.ReactNode}) {
  // const { user, isLoading } = useKindeBrowserClient() as KindeBrowserClient


  return (
    <AppLayout>
      <div className='flex h-screen items-center justify-center'>
        {/* welcome {isLoading ? '...' : user.given_name} */}
        {children}
      </div>
    </AppLayout>
  );
}