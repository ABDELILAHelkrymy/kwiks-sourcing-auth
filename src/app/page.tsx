'use client'
import LoginPage from "./login/page"; import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth'
export default function Home({ session }: Readonly<{ session: Session | null }>) {
  return (
    <SessionProvider session={session}>
      <LoginPage />
    </SessionProvider>
  );
}
