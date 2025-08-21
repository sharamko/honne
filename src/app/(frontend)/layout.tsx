import type { Metadata } from 'next';
import './_assets/styles/global.scss';
import Header from '@/app/(frontend)/_common/sections/header/Header';
import Footer from './_common/sections/footer/Footer';

export const metadata: Metadata = {
  title: 'Honne',
  description: 'Asian street food',
};

export type NavItem = { title: string; url?: string };

const catItems: NavItem[] = [
  {
    title: 'роллы',
  },
  {
    title: 'сеты',
  },
  {
    title: 'суши',
  },
  {
    title: 'закуски',
  },
  {
    title: 'запеченные',
  },
  {
    title: 'десерты',
  },
  {
    title: 'соусы',
  },
  {
    title: 'напитки',
  },
];
const navItems: NavItem[] = [
  {
    title: 'зона доставки',
    url: '#',
  },
  {
    title: 'контакты',
    url: '#',
  },
];
const navItemsFooter: NavItem[] = [
  {
    title: 'о нас',
    url: '#',
  },
  {
    title: 'зона доставки',
    url: '#',
  },
  {
    title: 'контакты',
    url: '#',
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <Header navItems={navItems} catItems={catItems} />
        <main>{children}</main>
        <Footer navItems={navItemsFooter} />
      </body>
    </html>
  );
}
