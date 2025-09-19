"use client";

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { usePathname } from 'next/navigation';
import { HamburgerMenu } from '@/components/hamburger-menu';
import { useState } from 'react';

// Metadata can't be exported from a client component, so we define it here.
// We can remove this if we don't need it.
// export const metadata: Metadata = {
//   title: 'ArchSlide',
//   description: 'A responsive website slide with a modern architectural theme.',
// };

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en" className="bg-white">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Header onMenuClick={() => setIsMenuOpen(true)} isHomePage={isHomePage} />
        <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

export default RootLayout;