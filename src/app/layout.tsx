import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Honne',
  description: 'Asian street food',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={inter.variable}>
        <Header />
        <main>
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
