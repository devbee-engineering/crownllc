'use client';

// Client provider component to wrap the app
export function ClientProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}