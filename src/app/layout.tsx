import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PortfolioProvider } from '@/context/PortfolioContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Portfolio Generator',
  description: 'Generate a professional portfolio website instantly with AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <PortfolioProvider>
          {children}
        </PortfolioProvider>
      </body>
    </html>
  );
}
