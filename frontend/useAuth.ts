// hooks/useAuth.ts
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function useAuth() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    // Public pages (don't redirect)
    if (pathname === '/login' || pathname === '/register' || pathname === '/') {
      setIsLoading(false);
      return;
    }

    // Protected pages - check token
    if (!token) {
      router.push('/login');
    } else {
      // Optional: Verify token validity by calling a protected API
      // (we'll add this later on backend)
    }
    
    setIsLoading(false);
  }, [router, pathname]);

  const isLoggedIn = !!localStorage.getItem('token');

  return { isLoggedIn, isLoading };
}