'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function ClientLogger() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const pageUrl = window.location.href;

    fetch('/api/log-visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pageUrl }),
    }).catch(console.error);

  }, [pathname, searchParams]);

  return null;
}