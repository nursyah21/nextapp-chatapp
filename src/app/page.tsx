"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

type KindeBrowserClient = {
  user: {email:string, given_name: string},
  isLoading: boolean
}

export default function Home() {
  const { user, isLoading } = useKindeBrowserClient() as KindeBrowserClient

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        welcome {isLoading ? '...' : user.given_name}
      </div>
    </>
  );
}