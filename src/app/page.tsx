'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // Or redirect to any default page like '/(protected)'
  }, [router]);

  return null; // Optional: loading spinner here
}
