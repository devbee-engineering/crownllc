"use client";

import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { usePathname } from 'next/navigation';
import { HamburgerMenu } from '@/components/hamburger-menu';
import { useState } from 'react';
import { FirebaseClientProvider } from '@/firebase';
import { FloatingActions } from '@/components/floating-actions';

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en" className="bg-white">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-text antialiased text-ink">
        <FirebaseClientProvider>
          <Header onMenuClick={() => setIsMenuOpen(true)} />
          <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
          {children}
          <FloatingActions />
          <Footer />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
