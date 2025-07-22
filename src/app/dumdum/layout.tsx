'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Nav from './comp/navbar/nav';


// used gpt to help with login routing logic
export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('td-user');
    if (!user) {
      router.push('/login'); 
    }
  }, [router]);

  return (
    <>
      {children}
    </>
  );
}
